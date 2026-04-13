const { createServiceApp } = require('../../createApp');
const router = require('../../routes/articles');

module.exports = createServiceApp('/api/articles', router);
