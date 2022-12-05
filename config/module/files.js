'use strict';

module.exports = [
  {
    url: '/api/files/:app/upload',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
  },
  {
    url: '/api/files/filestore/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
  },
  {
    url: '/api/files/filestore/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
  },
  {
    url: '/api/files/filestore/filesDownload',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
  },
];
