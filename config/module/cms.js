'use strict';

module.exports = [
  // 栏目
  {
    url: '/api/cms/column/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/column/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/column/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/cms/column/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  // 内容
  {
    url: '/api/cms/contents/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/contents/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/contents/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/cms/contents/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/cms/contents/fetch',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  // 图片新闻类型
  {
    url: '/api/cms/imgtype/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/imgtype/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/imgtype/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/cms/imgtype/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  // 图片新闻
  {
    url: '/api/cms/imgnews/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/imgnews/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/imgnews/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/cms/imgnews/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/cms/imgnews/fetch',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  // 菜单
  {
    url: '/api/cms/menus/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/menus/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/menus/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/cms/menus/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  // 单页
  {
    url: '/api/cms/pages/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/pages/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/pages/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/cms/pages/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  {
    url: '/api/cms/pages/fetch',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
  // 配置
  {
    url: '/api/cms/toconfig/create',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/toconfig/update',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'POST'
  },
  {
    url: '/api/cms/toconfig/delete',
    jwt: true,
    issuer: [ 'naf' ],
    log: true,
    method: 'DELETE'
  },
  {
    url: '/api/cms/toconfig/query',
    jwt: false,
    issuer: [ 'naf' ],
    log: false,
    method: 'GET'
  },
];
