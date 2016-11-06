exports.view = function(req,res){
    console.log("test");
    res.render('register',{
        name:"potato chip test!",
        distance: "X.X miles",
        shootingType: "Portrait, Landscape, Pet-Friendly"
    });
};