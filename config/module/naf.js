'use strict';

module.exports = [
  // 用户
  {
    url: '/api/naf/adminUser/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/naf/adminUser/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/naf/adminUser/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/naf/adminUser/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/naf/adminUser/updatePwd',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  // 角色
  {
    url: '/api/naf/role/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/naf/role/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/naf/role/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/naf/role/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  // 菜单
  {
    url: '/api/naf/adminMenu/queryUserMenu',
    jwt: true,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/naf/adminMenu/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  // 用户角色
  {
    url: '/api/naf/userBindRole/bind',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/naf/userBindRole/unbind',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/naf/userBindRole/queryBind',
    jwt: true,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/naf/userBindRole/queryRole',
    jwt: true,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/naf/userBindRole/batchBind',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/naf/userBindRole/batchUnBind',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  // 角色菜单
  {
    url: '/api/naf/roleBindMenu/bind',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/naf/roleBindMenu/unbind',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/naf/roleBindMenu/queryBind',
    jwt: true,
    issuer: [ 'naf' ],
    log: false,
    method: 'POST'
  },
  {
    url: '/api/naf/roleBindMenu/queryRole',
    jwt: true,
    issuer: [ 'naf' ],
    log: false,
    method: 'POST'
  },
  {
    url: '/api/naf/roleBindMenu/batchBind',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/naf/roleBindMenu/batchUnBind',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
];
