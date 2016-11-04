/**
 * Module dependencies
 */
var express = require('express');
var app = express();
var path = require('path');
var handlebars = require('express3-handlebars');

// var index = require('./routes/index');

var app = express();



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
app.get('/', (req, res) => {
	res.render('index');
});
app.get('/index', (req, res) => {
	res.render('index');
});

app.get('/about', (req,res) =>{
	res.render('about');
})
app.get('/account',(req,res) =>{
	res.render('account');
})

app.get('/addLocation', (req,res) =>{
	res.render('addLocation');
})
app.get('/addPhoto', (req, res) => {
	res.render('addPhoto');
});
app.get('/help', (req, res) => {
	res.render('help');
});
app.get('/register', (req, res) => {
	res.render('register');
});
app.get('/searchResult', (req, res) => {
	res.render('searchResult');
});
app.get('/searchResultTheme', (req, res) => {
	res.render('searchResultTheme');
});
app.get('/searchResultThemeMap', (req, res) => {
	res.render('searchResultThemeMap');
});
app.get('/searchResultThemeComments', (req, res) => {
	res.render('searchResultThemeComments');
});




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