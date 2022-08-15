const http = require('http');
const httpProxy = require("http-proxy")
// 所有需要代理的IP端口
const { modules } = require('./config/config.default')
// 错误配置文件
const errconf = require('./config/errconf')
const jwtauth = require('./jwtauth');
const log = require('./log');
const parse = require('./lib/parse');
const getBody = require('./lib/getBody');
// 路径对象
let mod = { agent: '', service: '', module: '', method: '', item: '' }
let userInfo = null;
let reqData = {};
let targetUrl = '';
// response返回函数
const response = async function (res, code, msg, header) {
    // 此处记录错误日志
    log({ mod, code, msg, userInfo, reqData })
    // 设置响应
    res.writeHead(code, header || {
        'content-type': 'application/json'
    });
    res.write(header ? msg : JSON.stringify(msg));
    res.end();
}
// 创建代理服务器
const proxy = httpProxy.createProxyServer({
    selfHandleResponse: true,
    changeOrigin: true,
    ignorePath: false //ignorePath用于转发请求时，是否将原请求地址中的path附加到转发地址后面。
});
// 错误代理监听
proxy.on("error", function (err, req, res) {
    response(res, 500, res.errinfo || errconf['ERR-PROXY'])
});
// 请求发送之前监听
proxy.on("proxyReq", function (proxyReq, req, res, options) {
    // 调用用户认证
    userInfo = jwtauth(mod, req);
    if (userInfo.errcode !== 0) {
        response(res, 401, userInfo)
        return
    }
    // 获取请求参数
    parse({ ...req, targetUrl })
    // 设置返回为json
    proxyReq.setHeader('Accept', 'application/json')
})
// 获得响应之后监听
proxy.on("proxyRes", async function (proxyRes, req, res) {
    // 赋值全局获取的参数
    reqData = req.reqData
    // 获取返回数据
    const { type, body } = await getBody(proxyRes)
    if (body) {
        // 返回错误
        if (body.status && body.status == 500) {
            response(res, 500, { ...errconf['ERR-NO-FIELD'], details: body.message })
        }
        // 文件类型
        if (type == 'file') {
            response(res, 200, body, { 'content-type': 'image/svg+xml' })
            return
        }
        // 正确响应
        response(res, 200, body)
    }
})
// 创建目标服务器
const app = http.createServer(function (req, res) {
    // 截取路径并转换成对象
    [ mod.agent, mod.service, mod.module, mod.method, mod.item ] = req.url.split('/').filter(e => e !== '').map(e => {
        if (e.includes('?')) {
            return e.split('?')[0]
        }
        return e
    })
    // 获取代理发送地址
    targetUrl = modules[mod.service]
    // 发送代理请求
    proxy.web(req, res, {
        target: targetUrl
    });
});
// 监听端口
app.listen(18090, function () {
    console.info("启动服务");
})