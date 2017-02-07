module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);
	app.get('/rest', home.rest);
	app.post('/rest', home.rest.post);
};
