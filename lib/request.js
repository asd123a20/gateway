const request = require('request');
const gatewayLog = require('./gatewayLog')
// 私有方法
const isRequest = async function (url, method, params, body, headers) {
  return new Promise( (resolve,reject)=>{
      request({
          url,
          method,
          headers,
          body,
          json: true,
      },
      function(err, httpResponse, data){
        if(err){
          gatewayLog(`请求调用失败${err}` + JSON.stringify({ params, body }))
          // reject(err)
        }else{
          resolve(data)
        }
      }
      )
  })
}
module.exports = class Point {
    get(url, params, headers) {
        return isRequest(url, 'get', params, {}, headers)
    }
    async post(url, params, body, headers) {
        const res = await isRequest(url, 'get', params, body, headers)
        console.log(res);
    }
}