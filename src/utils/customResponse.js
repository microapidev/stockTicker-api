export default (response, status, data, message) => {
  response.status(status).json({
    data,
    status: status ? status : 'success',
    message
  });
};
