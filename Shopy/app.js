// external node modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


// internal module
const rootDir = require('./utils/path');
const serviceRoutes = require('./routes/service/serviceRoutes')
const shopRoute = require('./routes/shop/shopRoute');
const signup = require('./routes/shop/signup');
const signin = require('./routes/shop/signin');
const home = require('./routes/shop/home');
const resgister = require('./routes/shop/resgister');

//  express server application.
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

//  static path to public directory.
app.use(express.static(path.join(rootDir, 'public')));


app.use(signup);
app.use(signin);
app.use(home);
app.use(resgister);
app.use(serviceRoutes);
app.use(shopRoute);

//  server listening port.
app.listen(3000);