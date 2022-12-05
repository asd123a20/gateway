const request = require('./lib/request')
const { logUrl } = require('./config/config.default')
module.exports = function ({ mod, code, msg, userInfo, reqData }) {
    const result = code == 200 ? '成功' : '失败'
    const curl = new request()
    curl.post(logUrl, {}, { ...mod, userInfo, resData: JSON.stringify(msg), reqData: JSON.stringify(reqData), result })
}