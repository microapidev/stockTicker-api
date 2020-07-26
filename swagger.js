
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "A Dockerized Stock-Ticker Micro-Service",
      description: "A Dockerized Microservice for Stock-Ticking",
      contact: {
        name: 'Team Justice League'
      },
      server: [
        {
          url: 'http:localhost:5000',
          description: 'Local server'
        },
        {
          url: 'stock-ticker-microapi.herokuapp.com',
          description: 'Staging Server'
        }]
    }
  },
  apis: ['./src/app.js']
}

export default swaggerOptions;
