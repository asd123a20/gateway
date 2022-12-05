const apipath = require('require-all')({
  dirname: __dirname + '/module',
})
module.exports = {
  // secret: 'GafJwtSecret!@#',
  secret: '123456',
  port: 18090,
  apipath,
  modules: {
    auth: 'http://127.0.0.1:9000',
    gaf: 'http://127.0.0.1:9001',
    log: 'http://127.0.0.1:9002',
    bind: 'http://127.0.0.1:9003',
  },
  logUrl: 'http://127.0.0.1:18094/api/log/adminlog/create'
};
