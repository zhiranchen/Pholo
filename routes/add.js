// Get all of locations data
var data = require('../locations.json');
exports.addLocationfromUser = function(req,res){
	var newLocation ={name:req.query.locationname, description:req.query.locationdescription,imageURL:req.query.locationimglink};
	data.locationArray.push(newLocation);
	console.log(newLocation);
	res.render('addLocation',data);
}