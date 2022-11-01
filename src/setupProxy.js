const proxy = require('http-proxy-middleware');

module.exports = function(app) {

    app.use(proxy('/api', { target: 'http://10.108.107.32:8080/' }));
    app.use(proxy('/account', { target: 'http://10.98.157.113:8081/' })); 
	
	/*
	app.use(proxy('/api', { target: 'http://172.18.0.2:8080/' }));
	app.use(proxy('/account', { target: 'http://172.18.0.3:8081/' }));*/

/*     app.use(proxy('/api', { target: 'http://10.111.48.90:8080/' }));
    app.use(proxy('/account', { target: 'http://10.104.111.92:8081/' })); */

};
