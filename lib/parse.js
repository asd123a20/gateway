const querystring = require('querystring')
module.exports = async function (req) {
    // 请求类型是图片直接返回
    if (req.rawHeaders.find(e => e == 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8' || e.includes('multipart/form-data;'))) return;
    const reqData = {};
     // 获取query参数
     const myurl = new URL(`${req.targetUrl}${req.url}`)
     const query = JSON.stringify(querystring.parse(myurl.search.substring(1)))
     reqData.query = JSON.parse(query)
    // 捕获发送前参数
    req.on('data', function(data){
        // 获取body参数
        data = JSON.stringify(data).replace(/%/g, "%25")
        const body = JSON.stringify(querystring.parse(decodeURIComponent(data)))
        reqData.body = JSON.parse(body)
        
    })
    // 给req添加参数  否则外部无法获取
    req.reqData = reqData
}