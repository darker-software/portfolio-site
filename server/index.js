const cookieParser = require('cookie-parser'),
	express = require('express'),
	path = require('path'),
	helmet = require('helmet'),
	nonceExpress = require("nonce-express"),
	bodyParser = require("body-parser"),
	routerApi = require('./api/api-routes'),
	csrf = require("@manny_is_typing/csurf"),
	handleCsrfError = require('./modules/csrfErrorHandler-module');

const app = express();

app.use(nonceExpress())
app.use(helmet({
	contentSecurityPolicy: {
		directives: {
			scriptSrc: ["'self'", (req,res) => `'nonce-${res.locals.nonce}'`]
		}
	}
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrf({ cookie: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

app.use("/api", routerApi);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	debugger;
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});


app.use(handleCsrfError);

if (process.env.NODE_ENV === "development") {
	app.use((err, req, res, next) =>{
		res.send(err);
	});
}

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);