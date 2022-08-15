module.exports = {
    // 正确返回
    'SUCCESS': {
        errcode: 0,
        errmsg: ''
    },
    // 50开头为网关代理错误
    'ERR-PROXY': {
        errcode: -500,
        errmsg: '代理错误'
    },
    // 40开头为认证错误
    'ERR-NO-JWT': {
        errcode: -4011,
        errmsg: '用户未登录'
    },
    'ERR-ERROR-JWT': {
        errcode: -4012,
        errmsg: 'jwt验证失败'
    },
    'ERR-NO-API': {
        errcode: -4013,
        errmsg: '接口不存在'
    },
    // 30开头为日志错误
    // 20开头为业务代码错误或缺少字段等
    'ERR-NO-FIELD': {
        errcode: -2011,
        errmsg: '缺少字段'
    }
    // 10开头为业务错误
}