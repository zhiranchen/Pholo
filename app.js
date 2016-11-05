/**
 * Module dependencies
 */
var express = require('express');
var app = express();
var path = require('path');
var handlebars = require('express3-handlebars');

// var index = require('./routes/index');

var app = express();

//existing controller input below
var locationPage = require('./routes/locationPage');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Pholo Key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// Add routes here
app.get('/'/*,RouteFunction.view*/);
app.get('/index'/*,RouteFunction.view*/);
app.get('/about'/*,RouteFunction.view*/);
app.get('/account'/*,RouteFunction.view*/);
app.get('/addLocation'/*,RouteFunction.view*/);
app.get('/addPhoto'/*,RouteFunction.view*/);
app.get('/help' /*,RouteFunction.view*/);
app.get('/register'/*,RouteFunction.view*/);
app.get('/searchResult', locationPage.view);
app.get('/searchResultTheme'/*,RouteFunction.view*/);
app.get('/searchResultThemeMap'/*,RouteFunction.view*/);
app.get('/searchResultThemeComments'/*,RouteFunction.view*/);




app.listen(app.get('port'), function() {
	console.log('Server listening');
})
/*
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
*/	

/*
var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
*/