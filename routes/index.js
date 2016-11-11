// Get all of locations data
var data = require('../locations.json');

exports.view = function(req,res){
    res.render('index',data);
};