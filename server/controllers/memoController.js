let Memo = require('../models/memo')

var createMemo = function(req, res) {
  Memo.create({
    title: req.body.title,
    content: req.body.content
  }, function(err, memo){
    if(err){
      res.send(err)
    } else {
      res.send(memo)
    }
  })
}

var getMemo = function(req,res) {
  Memo.find(function(err, memos){
    if(err){
      res.send(err)
    } else {
      res.send(memos)
    }
  })
}

var deleteMemo = function(req, res) {
  Memo.findByIdAndRemove(req.params.id, function(err, memo){
    if(err){
      res.send(err)
    } else {
      res.send("delete success")
    }
  })
}

var editMemo = function(req, res) {
  Memo.findOneAndUpdate({
    _id : req.params.id
  }, {
    title: req.body.title,
    content: req.body.content
  }, function(err, memo){
    if(err){
      res.send(err)
    } else {
      res.send(memo)
    }
  })
}

module.exports = {
  createMemo,
  getMemo,
  deleteMemo,
  editMemo
}
