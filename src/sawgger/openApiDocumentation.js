const openApiDocumentation = {
  swagger: '3.0',
  openapi: '3.0.1',
  info: {
    title: ' Dockerized Stock Micro Service',
    description: 'A Dockerized Microservice for Stock Ticker',
    contact: {
      name: 'Stock Ticker API'
    }
  },
  server: [
    {
      url: 'http:localhost:3000',
      description: 'Local Server'
    }
  ],
  tags: [
    {
      name: 'CRUD Operations Routes'
    }
  ],
  paths: {
    '/v1': {
      post: {
        tags: ['v1'],
        description: 'V1',
        operationId: 'apikey',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/v1'
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'Success',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response'
                }
              }
            }
          },
          '400': {
            description: 'Bad Request',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response'
                }
              }
            }
          }
        }
      }
    },
    components: {
      schemas: {
        Response: {
          type: 'object',
          properties: {
            status: {
              type: 'boolean'
            },
            message: {
              type: 'string'
            }
          }
        },
        v1: {
          type: 'object',
          properties: {
            email: {
              type: 'string'
            }
          }
        }
      }
    }
  }
};
module.exports = openApiDocumentation;
