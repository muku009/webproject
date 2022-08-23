const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homerout= require('./rout/homerout')
const port  = process.env.port || 8080;

const app  = express();

mongoose.connect('mongodb://localhost:27017/admin',{useNewUrlParser:true})
const db = mongoose.connection;

db.on("error",()=>{console.log("error in conection");})
db.once('open',()=>{console.log("Connected");})




app.set('view engine','ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/',homerout);

app.listen(port);