const auth = require('./module/auth');
const gaf = require('./module/gaf');
module.exports = {
  // secret: 'GafJwtSecret!@#',
  secret: '123456',
  port: 18090,
  apipath: { auth, gaf},
  modules: {
    auth: 'http://127.0.0.1:9000',
    gaf: 'http://127.0.0.1:9001',
  },
  logUrl: 'http://127.0.0.1:18094/api/log/adminlog/create'
};
