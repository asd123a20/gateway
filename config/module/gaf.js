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
    url: '/api/gaf/adminUser/delete/:id',
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
    url: '/api/gaf/role/delete/:id',
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
    url: '/api/gaf/menu/update/:id',
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
  // 绑定
  {
    url: '/api/gaf/bind/bind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/bind/unbind/:id',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/bind/queryBind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/gaf/bind/queryRole',
    jwt: true,
    issuer: [ 'gaf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/gaf/bind/batchBind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/gaf/bind/batchUnBind',
    jwt: true,
    issuer: [ 'gaf' ],
    log: true,
    method: 'POST'
  },
];
