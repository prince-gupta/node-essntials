const express = require('express');
const bodyParser = require('body-parser')
const logger = require('./utils/logger');
const helmet = require('./utils/helmet');
const userValidation = require('./steppers/user-validation');
const productCodeFetcher = require('./steppers/productCodeFetcher');
const user = require('./model/User');


var app = express();


user.save();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

helmet.bind(app);

//var loggerFormat = '[:date[web]] ":method :url" :status :response-time';
//logger.bindForAccessLogs(app,'log','access.log',loggerFormat,'1d');

logger.bind(app, 'info', '../log', 'access.log', '1d', true);


app.get('/:id', userValidation.run, productCodeFetcher.run);

app.post('/post', function (req, res) {
  res.send('Your request has : ' + req.message);
})

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

app.listen(3001);

module.exports = app;
