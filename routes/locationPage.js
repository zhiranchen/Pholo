//get locations data -- not sure why not working?
//var locs = require('../locations.json')

exports.view = function(req,res){
    console.log("test");
    res.render('searchResult',{
        name:"potato chip test!",
        distance: "X.X miles",
        shootingType: "Portrait, Landscape, Pet-Friendly"
    });
};

