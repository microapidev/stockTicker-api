const swaggerJSDoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.21', // Version of swagger
  info: {
    title: 'Stock-Ticker MicroAPI', // Title of the documentation
    version: '1.0.0', // Version of the app
    termsOfService: 'https://microapi.dev/terms-of-service',
    contact: {
      name: 'API Support',
      url: 'https://microapi.dev/contact',
      email: 'api@stock-ticker.microapi.dev'
    },
    license: {
      name: 'MIT',
      url: 'https://github.com/microapidev/stockTicker-api/blob/develop/LICENSE'
    },
    description:
      '### Overview' +
      '\n\n' +
      'A microservice to monitor the stock market, and reflect current market prices.' +
      '\n\n' +
      'Basic functionalities are available for viewing company profile, financial metrics, and stock quotes ' +
      'while ensuring that only users authorized are allowed ' +
      'to use such functionalities.' +
      '\n\n' +
      'Other features such as configuration of api query, response format in either .csv, or .json ' +
      'are under development.'
  },
  servers: [
    {
      url: 'https://stock-ticker.microapi.dev/api/v1',
      description: 'Production server (uses live data)'
    },
    {
      url: 'https://stock-ticker-microapi.herokuapp.com/api/v1',
      description: 'Staging server (uses test data)'
    },
    {
      url: 'http://localhost:3000/api/v1',
      description: 'Local server (uses test data)'
    }
  ],
  components: {
    securitySchemes: {
      Bearer: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['docs/**/*.yaml']
};
// initialize swagger-jsdoc
module.exports = swaggerJSDoc(options);
