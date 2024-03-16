

const express = require('express');

const router = express.Router();

const contactController = require("../controllers/contact.js");

router.get('/contact-us', contactController.getContactPage);


router.post('/contact-us', contactController.postContact);

module.exports = router;