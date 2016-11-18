exports.viewLocation = function(req,res){
	//controller code goes here
	var name = req.params.name;
	//var descrption = req.params.description;
	//var imageURL = req.params.imageURL;
	var longitude = req.params.longitude;
	var latitude = req.params.latitude;
	var altitude = req.params.altitude;
	//var tags = req.params.tags;
	var likes = req.params.likes;
	console.log('The project name is: '+name);
	res.render('singleLocationPage',{
		'locationName':name,
		//'locationDescription': description,
		//'locationImageURL': imageURL,
		'locationLongitude': longitude,
		'locationLatitude': latitude,
		'locationAltitude': altitude,
		//'locationTags': tags,
		'locationLikes': likes
	});

}