exports.view = function(req,res){
    console.log("test");
    res.render('addLocation',{
        name:"potato chip test!",
        distance: "X.X miles",
        shootingType: "Portrait, Landscape, Pet-Friendly"
    });
};