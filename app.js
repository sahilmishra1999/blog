var express = require('express');

var app = express();
app.use('/', express.static('public'));
app.get('/',function(req,res){
   res.send('Hello from sahil');
});

var server = app.listen(process.env.PORT || '8000',function(){
    console.log("Server is running");
});