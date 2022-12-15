const express = require("express"),
	hcaptcha = require("express-hcaptcha"),
	contactFormController = require("./contactForm-controller"),
	{ HCAPTCHA_SECRET_KEY } = require("../lib/constants");
	
const router = express.Router();

router.post("/contact/submit", [hcaptcha.middleware.validate(HCAPTCHA_SECRET_KEY), contactFormController.submit]);

module.exports = router;
