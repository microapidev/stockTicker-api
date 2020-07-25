require('express-async-errors');
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { errorHandler } from './middlewares/errorHandler';
import CustomError from './utils/customError';
import indexRouter from './routes/index';
import apiRouter from './routes/api/index';

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

export default app;
