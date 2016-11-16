exports.viewLocation = function(req,res){
	//Location Name
	var name = req.params.name;

	//Location Description
	//var description = req.params.description;

	//Location Address
	var address = req.params.address;

	//Location Tags
	var tags = req.params.tags;

	//Location Likes
	var likes = req.params.likes;

	//Location Latitude
	//var latitude = req.params.latitude;

	//Location Longitude
	//var longitude = req.params.longitude;

	//Render Info
	res.render('location',{
		'locationName':name,
		//'locationDescription':description,
		'locationAddress':address,
		'locationTags':tags,
		'locationLikes':likes,
		//'locationLatitude':latitude,
		//'locationLongitude':longitude,
	});

}