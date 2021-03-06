var express = require('express');
var app = express();
var mongojs=require('mongojs');
var db =mongojs('contactlist',['contactlist']);
var bodyParser=require('body-parser');

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.json());

app.get('/contactlist',function(req,res){

console.log("Received a GET request");
db.contactlist.find(function(err,docs){
//console.log(docs);
res.json(docs);
});

db.contactlist.count(function(err,docs){
console.log(docs);
$contact=docs;
console.log($contact);
});
});


app.post('/contactlist',function(req,res){
//console.log(req.body);

db.contactlist.insert(req.body,function(err,docs){

	res.json(docs);
});

});


app.listen(3000);
console.log('Server running on port 3000');
