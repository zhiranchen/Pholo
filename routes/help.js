exports.view = function(req,res){
    console.log("test");
    res.render('help',{
        name:"potato chip test!",
        distance: "X.X miles",
        shootingType: "Portrait, Landscape, Pet-Friendly"
    });
};