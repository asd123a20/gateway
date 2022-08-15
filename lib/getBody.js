module.exports = function (proxyRes) {
    // console.log(proxyRes);
    return new Promise((resolve, reject) => {
        // 获取响应内容
        const data = []
        let buffData;
        proxyRes.on('data', function (chunk) {
            data.push(chunk)
            buffData = chunk
        });
        proxyRes.on('end', function() {
            // 响应内容  JSON格式
            if (proxyRes.headers['content-type'] === 'application/json; charset=utf-8') {
                resolve({ type: 'json', body: JSON.parse(data) })
                return
            }
            resolve({ type: 'file', body: buffData })
        })
    })
}