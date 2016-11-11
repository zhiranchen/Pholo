// Get all of locations data
var data = require('../locations.json');

exports.view = function(req,res){
	console.log(data);
    res.render('index',data);
};