//  external node modules
const express = require('express');
const route = express.Router();
const path = require('path');

// internal modules
const rootDir = require('../../utils/path');





// home page for Shopy.
route.post('/home',(req, res, next)=>{
    console.log(req.body);
    // if(authenticateUser(req)){

        res.sendFile(path.join(rootDir,'views', 'home.html'));
    // } else {
    //     res.redirect('/');
    // }
});


function authenticateUser(req){
    
}


module.exports = route;