var express= require('express')
var app= express();
app.get('/', function(req,res)
{
 //   res.send('Hello World');
 res.sendFile(__dirname  +  '/index.html')
})
app.get('/contact', function(req,res)
{
 //   res.send('Hello World');
 res.sendFile(__dirname  +  '/contact.html')
})
app.get('/services', function(req,res)
{
 //   res.send('Hello World');
 res.sendFile(__dirname  +  '/services.html')
})
var server=app.listen(8085,function()
{
var host=server.address().address
var port=server.address().port
console.log("Example app listening at http://%s:%s",host,port)
})