const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');
require('dotenv').config();
const path = require('path')
const port = process.env.PORT;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  };
  
app.use(cors(corsOptions));
app.use(express.json());
connectDB();  
app.use('/api/auth', require('./routes/auth'));
app.get('/',(req,res)=>{
  res.send("Hello from server")
})

app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,"../frontend/build/index.html"))
})
app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});
