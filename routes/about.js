exports.view = function(req,res){
    console.log("test");
    res.render('about',{
        name:"potato chip test!",
    });
};