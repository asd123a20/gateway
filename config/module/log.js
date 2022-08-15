'use strict';

module.exports = [
  {
    url: '/api/log/adminlog/create',
    jwt: false,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/log/adminlog/update',
    jwt: false,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/log/adminlog/delete',
    jwt: false,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/log/adminlog/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/log/adminlog/fetch',
    jwt: false,
    issuer: [ 'naf' ],
    log: true,
    method: 'GET'
  },
];
