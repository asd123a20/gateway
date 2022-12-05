module.exports = [
    // 活动
    {
        url: '/api/activity/task/create',
        jwt: true,
        issuer: [ 'gaf' ],
        log: true,
        method: 'POST'
      },
      {
        url: '/api/activity/task/updated',
        jwt: true,
        issuer: [ 'gaf' ],
        log: true,
        method: 'POST'
      },
      {
        url: '/api/activity/task/delete/:id',
        jwt: true,
        issuer: [ 'gaf' ],
        log: false,
        method: 'DELETE'
      },
      {
        url: '/api/activity/task/querye',
        jwt: true,
        issuer: [ 'gaf' ],
        log: false,
        method: 'GET'
      },
      {
        url: '/api/activity/task/stopTask',
        jwt: true,
        issuer: [ 'gaf' ],
        log: true,
        method: 'POST'
      }
    ];