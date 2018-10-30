const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('dist/public'));


app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'));
});

app.listen('3000', (req,res) => {
    console.log('Server is listening with the Port: 3000');
});