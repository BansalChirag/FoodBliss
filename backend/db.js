const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.uri
// console.log(process.env.uri)
// console.log("🚀 ~ file: db.js:4 ~ rocess.env.url:", process.env.uri)
const connectDB = ()=> mongoose.connect(uri).then(()=>{
    console.log("connected to mongo db");
}).catch(err=>{
    console.log(`Error : ${err}` );
})

module.exports = connectDB;


