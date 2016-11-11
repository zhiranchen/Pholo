// Get all of locations data
var jsonfile = require('jsonfile');
jsonfile.spaces = 4;
var data = require('../locations.json');
exports.addLocationfromUser = function(req,res){
	var newLocation ={name:req.query.locationname, description:req.query.locationdescription,imageURL:req.query.locationimglink};
	data.locationArray.push(newLocation);
	// jsonfile path rooted as node  
	jsonfile.writeFile('./locations.json', data, (err) => {
		console.log(err);
	});
	console.log(newLocation);
	res.redirect('/');
}