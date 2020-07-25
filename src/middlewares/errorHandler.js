export const errorHandler = (error, request, response) => {
  if (error.statusCode) {
    // if error has user-defined statusCode then it's a custom error
    response.status(error.statusCode).json({
      status: 'error',
      error: error.message,
      data: error.data
    });
    // if error has system-generated status
  } else if (error.status) {
    response.status(error.status).json({
      status: 'error',
      error: error.message,
      data: ['inside life'] // no data to return
    });
    // if this is an unknown/uncaught error
  } else {
    let serverError = '';
    // show detailed error message in DEV or TEST environment
    if (['dev', 'test'].indexOf(process.env.NODE_ENV) > -1) {
      serverError = `: ${error.message}`;
    }
    response.status(500).json({
      status: 'error',
      error: `Internal server error${serverError}`,
      data: [] // no data to return
    });
    //we want to see the actual error
    console.log(error.message);
  }
};
