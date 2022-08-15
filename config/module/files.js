'use strict';

module.exports = [
  {
    url: '/api/files/:app/upload',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/files/filestore/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/files/filestore/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/files/filestore/filesDownload',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
];
