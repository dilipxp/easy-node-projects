//  external node modules
const express = require('express');
const route = express.Router();
const path = require('path');
const fs = require("fs");

// internal modules
const rootDir = require('../../utils/path');





// home page for Shopy.
route.post('/register',(req, res, next)=>{
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
    // fs.writeFileSync('user.txt', req.body)
    const file = fs.copyFileSync(path.join(rootDir, 'databsae', 'userdata.txt'))
    console.log(file)

    // if(authenticateUser(req)){

        res.sendFile(path.join(rootDir,'views', 'home.html'));
    // } else {
    //     res.redirect('/');
    // }
});


function authenticateUser(req){
    
}


module.exports = route;