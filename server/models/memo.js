'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var memoSchema = new Schema({
  title : {
    type: String,
    required: [true, 'Memo title is required']
  },
  content : {
    type: String,
    required: [true, 'Memo content is required']
  }
});

var Memo = mongoose.model('Memo', memoSchema);

module.exports = Memo;
