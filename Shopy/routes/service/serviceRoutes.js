//  external node modules
const express = require('express');
const route = express.Router();
const path = require('path');

// internal modules
const rootDir = require('../../utils/path');


// service page for 503 "Work is under progress" or "Service not available".
route.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir,'views', '503.html'));
    // res.send('<h1>Service Routes</h1>');
});

// // service page for 404 "Page not found".
// route.use((req, res, next)=>{
//     res.status(404).sendFile(path.join(rootDir,'views', '404.html'));
//     // res.send('<h1>Service Routes</h1>');
// });


module.exports = route;