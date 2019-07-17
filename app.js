const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();
const cors = require('cors');

// Import Routes
const postRoutes = require('./routes/posts')

// Creating MiddleWare
app.use(bodyParser.json());
app.use('/posts', postRoutes);
app.use(cors());

// Connect to Database
mongoose.connect(process.env.DB_CONNECTION_STRING, 
{ useNewUrlParser: true },
()=>{
    console.log("DB Connected!")
})

app.use('/', (req, res) =>{
    res.send('Hey there!');
})

app.listen(3001);