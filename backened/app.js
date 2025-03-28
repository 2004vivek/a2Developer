var express = require('express');
var path = require('path');
const userroute=require('../backened/routes/users')
const cors=require('cors');
const connection=require('../backened/config/connection')
connection();
var app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api",userroute)


app.listen(3000,()=>{
  console.log('Server is running at 3000'); 
})


module.exports = app;
