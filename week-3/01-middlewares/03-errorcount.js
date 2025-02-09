const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;
let userCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

function postMiddleware(req, res, next){
  userCount++;
  next();
}

app.get('/user', function(req, res) {
  if(userCount==0){
    errorCount++;
    res.status(404).json({msg : "User not found"});
  }else{

    res.status(200).json({ name: 'john' });
  }
});

app.post('/user',postMiddleware, function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

module.exports = app;