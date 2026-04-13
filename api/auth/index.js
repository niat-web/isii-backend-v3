const { createServiceApp } = require('../../createApp');
const router = require('../../routes/auth');

module.exports = createServiceApp('/api/auth', router);
