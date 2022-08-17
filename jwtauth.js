const { apipath, secret } = require('./config/config.default');
const errconf = require('./config/errconf')
const jsonwebtoken = require('jsonwebtoken')
module.exports = function (mod, { rawHeaders, method }) {
    const conf = apipath[mod.service]
    const url = `/${mod.agent}/${mod.service}/${mod.module}/${mod.method}`
    const item = rewrite_path(conf, url)
    // 如果未查询到接口配置  代表该接口不存在
    if (!item || item.method !== method) return errconf['ERR-NO-API']
    // 如果item存在并且 jwt = false 代表该接口不进行验证， item && item.jwt = true 表示该接口存在并且需要验证
    if (item && item.jwt) {
        if (rawHeaders.indexOf('authorization') == -1) return errconf['ERR-NO-JWT']
        let token = rawHeaders[rawHeaders.indexOf('authorization') + 1]
        // 解密jwt
        return jsonwebtoken.verify(token, secret, (err, user) => {
            if (err) {
                let details
                if (err.name == 'TokenExpiredError') details = '登录过期'
                if (err.name == 'JsonWebTokenError' && err.message == 'invalid signature') details = 'JWT无效签名'
                return { ...errconf['ERR-ERROR-JWT'], details }
            }
            return { ...errconf['SUCCESS'], data: user }
        });
    }
    return errconf['SUCCESS']
}
// 重写路径
const rewrite_path = function (modules, path) {
    return modules.find(e => {
      const { url } = e;
      let data = null;
      const urlList = url.split('/');
      const pathIist = path.split('/');
      const urlItem = urlList.findIndex(j => j.includes(':'));
      if (urlItem > 0) data = pathIist[urlItem];
      if (data !== null) urlList[urlItem] = data;
      const pathItem = urlList.join('/');
      if (pathItem === path) return e;
      return false;
    });
  }