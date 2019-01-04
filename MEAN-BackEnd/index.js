var http =require('http');
var express=require('express');
var port =process.env.PORT||8080;
var app=express();
var mongoose= require('mongoose');
var appRoutes=require('./routes/appRoutes');
var bodyparser=require('body-parser');
var cors =require('cors');


mongoose.connect('mongodb://localhost/meanDb',{ useNewUrlParser: true });
//MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(cors());


app.use('/',appRoutes);




http.createServer(app).listen(port);

console.log("Running ",port);
