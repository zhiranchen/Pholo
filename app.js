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
var about = require('./routes/about');
var account = require('./routes/account');
var addLocation = require('./routes/addLocation');
var addPhoto = require('./routes/addPhoto');
var help = require('./routes/help');
var index = require('./routes/index');
var register = require('./routes/index');
var searchResultTheme = require('./routes/searchResultTheme');
var searchResultThemeMap = require('./routes/searchResultThemeMap');
var add = require('./routes/add');

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
app.get('/', index.view);
app.get('/index', index.view);
app.get('/about', about.view);
app.get('/account', account.view);
app.get('/addLocation', addLocation.view);
app.get('/addPhoto', addPhoto.view);
app.get('/help', help.view);
app.get('/register', register.view);
app.get('/searchResult', locationPage.view);
app.get('/searchResultTheme', searchResultTheme.view);
app.get('/searchResultThemeMap', searchResultThemeMap.view);
app.get('/add', add.addLocationfromUser); //add new location from user's input
//app.get('/searchResultThemeComments'/*,RouteFunction.view*/);




app.listen(app.get('port'), function() {
	console.log('Server listening');
});
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