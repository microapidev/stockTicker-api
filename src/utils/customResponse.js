export default (response, status, data, message) => {
  response.status(status).json({
    data,
    status: 'success',
    message
  });
};
