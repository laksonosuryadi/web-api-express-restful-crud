const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/index');
const mongoose = require('mongoose');
const cors = require('cors')
mongoose.connect('mongodb://localhost/memo')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/memo', index);

app.listen(3000, function(){
  console.log('app is listening on port 3000');
})

mongoose.connection.on('connected', function(){
  console.log('Mongoose is connected');
})

module.exports = app;
