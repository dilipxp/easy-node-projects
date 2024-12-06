//  external node modules
const express = require('express');
const route = express.Router();
const path = require('path');

// internal modules
const rootDir = require('../../utils/path');


// home page for Shopy.
route.get('/signin',(req, res, next)=>{
    res.sendFile(path.join(rootDir,'views', 'signin.html'));
});


module.exports = route;