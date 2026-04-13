const { createServiceApp } = require('../../createApp');
const router = require('../../routes/news');

module.exports = createServiceApp('/api/news', router);
