require('express-async-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { connect } = require('./config/mongodb');
const { errorHandler } = require('./middlewares/errorHandler');
const CustomError = require('./utils/customError');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api/index');

/** Connect to database
*/
connect();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404, non-existent route
app.use('*', (request, response, next) => {
  const error = new CustomError(404, `Oops. The route ${request.method} ${request.originalUrl} is not recognised`);
  next(error);
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  errorHandler(error, request, response);
});

module.exports = app;
