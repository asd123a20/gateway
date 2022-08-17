'use strict';

module.exports = [
  // 用户
  {
    url: '/api/gaf/adminUser/create',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/adminUser/update',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/adminUser/delete',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/gaf/adminUser/query',
    jwt: false,
    issuer: [ 'gaf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/gaf/adminUser/updatePwd',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  // 角色
  {
    url: '/api/gaf/role/create',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/role/update',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/role/delete',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/gaf/role/query',
    jwt: false,
    issuer: [ 'gaf' ],
    log: false,
    method: 'GET'
  },
  // 菜单
  {
    url: '/api/gaf/menu/query',
    jwt: true,
    issuer: [ 'gaf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/gaf/menu/create',
    jwt: true,
    issuer: [ 'gaf' ],
    log: false,
    method: 'POST'
  },
  {
    url: '/api/gaf/menu/update',
    jwt: true,
    issuer: [ 'gaf' ],
    log: false,
    method: 'POST'
  },
  {
    url: '/api/gaf/menu/delete',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'DELETE'
  },
  // 用户角色
  {
    url: '/api/gaf/userBindRole/bind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/userBindRole/unbind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/userBindRole/queryBind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/gaf/userBindRole/queryRole',
    jwt: true,
    issuer: [ 'gaf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/gaf/userBindRole/batchBind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/userBindRole/batchUnBind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  // 角色菜单
  {
    url: '/api/gaf/roleBindMenu/bind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/roleBindMenu/unbind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/roleBindMenu/queryBind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: false,
    method: 'POST'
  },
  {
    url: '/api/gaf/roleBindMenu/queryRole',
    jwt: true,
    issuer: [ 'gaf' ],
    log: false,
    method: 'POST'
  },
  {
    url: '/api/gaf/roleBindMenu/batchBind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/roleBindMenu/batchUnBind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
];
