'use strict';

module.exports = [
  // 获取验证码
  {
    url: '/api/auth/pwdlogin/get_verification_code',
    jwt: false,
    issuer: [],
    log: false,
    method: 'GET'
  },
  // 帐号密码登录
  {
    url: '/api/auth/pwdlogin/auth',
    jwt: false,
    issuer: [],
    log: true,
    method: 'POST'
  },
  // 获取二维码（uuid）
  {
    url: '/api/auth/qrlogin/qrcode',
    jwt: false,
    issuer: [],
    log: false,
  },
  // 使用二维码换取登录凭证
  {
    url: '/api/auth/qrlogin/qrcodeLogin',
    jwt: false,
    issuer: [],
    log: false,
  },
  // 获取openid 带参数二维码uuid
  {
    url: '/api/auth/qrlogin/get_openid',
    jwt: false,
    issuer: [],
    log: false,
  },
  // 二维码登录验证
  {
    url: '/api/auth/qrlogin/auth',
    jwt: false,
    issuer: [],
    log: false,
  },
];
