const express=require('express');
const port=3000;
const bookRouter=require('./routes/book.js');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, function(){
    console.log("Express is running in port "+port);
    });

app.get('/',function(request, response){
    response.send("Express REST API example");
});

app.use('/book',bookRouter);

module.exports=app;