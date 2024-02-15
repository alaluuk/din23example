const express=require('express');
const port=3000;

var app = express();

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

module.exports=app;