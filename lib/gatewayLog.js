const fs = require('fs')
module.exports = function(data) {
    fs.writeFile('./log.txt', `${data}\r`, function (err) {
        if(err) {
            console.log(err);
            return console.error('网关日志记录错误')
        }
        console.log('文件写入成功');
    });
}
