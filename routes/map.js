exports.view = function(req,res){
    res.render('map',{
        name:"potato chip test!",
        distance: "X.X miles",
        shootingType: "Portrait, Landscape, Pet-Friendly"
    });
};