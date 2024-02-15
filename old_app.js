const express=require('express');
const port=3000;

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, function(){
    console.log("Express is running in port "+port);
    });

app.get('/',function(request, response){
    response.send("Test1");
    console.log("Test one");
});

app.get('/first',function(request, response){
    response.send("Endpoint first");
});
//Middleware method is executed automatically
//Middleware is written using method use
app.use(function(request, response, next){
    console.log("MiddleWare1");
    next();
});
app.get('/second/:fname',function(request, response){
    response.send("Hello "+request.params.fname);
});
app.use(function(request, response, next){
    console.log("MiddleWare2");
    next();
});
app.get('/third/:lname?',function(request,response){
    response.send("Your lastname="+request.params.lname);
});

app.get('/book',function(request, response){
    console.log("All books are here");
    response.send("All books");
});

app.post('/book',function(request, response){
    console.log(request.body);
    response.json(request.body);
});


module.exports=app;