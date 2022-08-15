'use strict';

module.exports = [
  // 字典类型
  {
    url: '/api/code/type/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/code/type/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/code/type/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/code/type/query',
    jwt: true,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  // 字典
  {
    url: '/api/code/dictionary/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/code/dictionary/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/code/dictionary/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/code/dictionary/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
];
