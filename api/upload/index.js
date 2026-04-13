const { createServiceApp } = require('../../createApp');
const router = require('../../routes/upload');

module.exports = createServiceApp('/api/upload', router);
