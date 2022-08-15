const code = require('./module/code');
const files = require('./module/files');
const cms = require('./module/cms');
const log = require('./module/log');
const login = require('./module/login');
const naf = require('./module/naf');
module.exports = {
  secret: 'GafJwtSecret!@#',
  // secret: '123456',
  port: 18090,
  apipath: { code, files, naf, cms, login, log},
  modules: {
    login: 'http://127.0.0.1:18095',
    code: 'http://127.0.0.1:18091',
    files: 'http://127.0.0.1:18093',
    naf: 'http://127.0.0.1:18096',
    cms: 'http://127.0.0.1:18092',
    log: 'http://127.0.0.1:18094',
  },
  logUrl: 'http://127.0.0.1:18094/api/log/adminlog/create'
};
