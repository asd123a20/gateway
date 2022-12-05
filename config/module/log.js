'use strict';

module.exports = [
  // 系统日志
  // 日志添加
  {
    url: '/api/log/adminlog/create',
    jwt: true,
    issuer: [],
    log: true,
    method: 'POST'
  },
  // 日志删除
  {
    url: '/api/log/adminlog/delete/:id',
    jwt: true,
    issuer: [],
    log: true,
    method: 'DELETE'
  },
  // 日志查询
  {
    url: '/api/log/adminlog/query',
    jwt: true,
    issuer: [],
    log: true,
    method: 'GET'
  },
  // 日志详情
  {
    url: '/api/log/adminlog/fetch/:id',
    jwt: true,
    issuer: [],
    log: true,
    method: 'GET'
  }
];
