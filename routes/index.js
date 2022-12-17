const express = require('express');
const router = express.Router();
const { produceMessage } = require('../controller/produce-ctlr');

router.post('/message/produce', produceMessage);

module.exports = router;
