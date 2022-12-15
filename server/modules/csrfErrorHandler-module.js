const handleCsrfError = function(err, req, res, next) {
	if (err.code !== 'EBADCSRFTOKEN') return next(err);

	res.status(403);
	res.send("fuck off");
}

module.exports = handleCsrfError;