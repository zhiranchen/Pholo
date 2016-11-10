// Get all of locations data
var data = require('../locations.json');

exports.view = function(req,res){
	console.log("yay, index.js just ran!");
    res.render('index',data);
};