const { createServiceApp } = require('../../createApp');
const router = require('../../routes/reports');

module.exports = createServiceApp('/api/reports', router);
