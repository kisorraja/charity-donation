var express=require("express");
var bodyParser=require("body-parser");
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error',console.log.bind(console,"connection error"));
db.once('open',function(callback){
 console.log("connection succeeded");
})
var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
 extended: true
}));
 app.post('/sign'function(req,res){
 var Name = req.body.name;
 var Lname = req.body.lname
 var Email = req.body.email;
 var Phonenumber = req.body.phonenumber;
 var Age=req.body.age;
 var Amount=req.body.Amount;
 var data = {
"name": Name,
"lname":Lname,
"email" : Email,
"phonenumber":Phonenumber,
"age":Age,
"amount":Amount,
 }
db.collection('DONATION').insertOne(data,function(err, collection){
 if (err) throw err;
 console.log("Record inserted Successfully");
});
return res.redirect('success.html');
})
app.listen(9000);
console.log("server listening at port 9000");