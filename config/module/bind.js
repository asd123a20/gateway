module.exports = [
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