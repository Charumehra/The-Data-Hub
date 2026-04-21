const express = require('express');
const connectDB = require('./src/db/db');
const app = require('./src/app');


connectDB();
app.listen(5000, ()=>{
    console.log('server is running on port 5000');
})