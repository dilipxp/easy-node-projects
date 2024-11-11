// external node modules
const express = require('express');
const path = require('path');

// internal module
const rootDir = require('./utils/path');
const serviceRoutes = require('./routes/service/serviceRoutes')
const shopRoute = require('./routes/shop/shopRoute');

//  express server application.
const app = express();

//  static path to public directory.
app.use(express.static(path.join(rootDir, 'public')));


app.use(serviceRoutes);
app.use(shopRoute);

//  server listening port.
app.listen(3000);