//get locations data -- not sure why not working?
//var locs = require('../locations.json')

exports.viewLocation= function(req,res){
	var name = req.params.name;
	console.log('The location name is: '+ name);
    res.render('potatochip');
};

