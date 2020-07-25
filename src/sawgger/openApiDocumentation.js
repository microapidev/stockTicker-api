const { string } = require("@hapi/joi");

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
  security: {
    bearerAuth: {},
  },
  paths: {
    '/': {
        post: {
          tags: ['Register Admin'],
          description: 'Registers admin',
          operationId: 'register',
          security: [ {bearerAuth: {}}],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/v1',
                },
              },
            },
            required: true,
          },
          parameters: [],
          responses: {
            '200': {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Response',
                  },
                },
              },
            },
            '400': {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Response',
                  },
                },
              },
            },
          },
        },
      },
      '/:adminId': {
        get: {
          tags: ['Admin'],
          description: 'Registered admin',
          operationId: 'registered',
          security: [ {bearerAuth: {}}],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type:String,
                },
              },
            },
            required: true,
          },
          parameters: [],
          responses: {
            '200': {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Response',
                  },
                },
              },
            },
            '400': {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Response',
                  },
                },
              },
            },
          },
        },
      },
      '/:adminId/key': {
        get: {
          tags: ['Api key'],
          description: 'admin key',
          operationId: 'api key',
          security: [ {bearerAuth: {}}],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                    type:String,
                },
              },
            },
            required: true,
          },
          parameters: [],
          responses: {
            '200': {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Response',
                  },
                },
              },
            },
            '400': {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Response',
                  },
                },
              },
            },
          },
        },
      },
      '/:symbol/profile': {
        get: {
          tags: ['Profile'],
          description: 'company profile',
          operationId: 'register',
          security: [ {bearerAuth: {}}],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                 type:String,
                },
              },
            },
            required: true,
          },
          parameters: [],
          responses: {
            '200': {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Response',
                  },
                },
              },
            },
            '400': {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Response',
                  },
                },
              },
            },
          },
        },
      },
      '/:symbol/metric': {
        get: {
          tags: ['metric'],
          description: 'metric',
          operationId: 'metric',
          security: [ {bearerAuth: {}}],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                 type:String,
                },
              },
            },
            required: true,
          },
          parameters: [],
          responses: {
            '200': {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    $ref:'#/components/schemas/Response'
                  },
                },
              },
            },
            '400': {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Response',
                  },
                },
              },
            },
          },
        },
      },
      '/:symbol/stock': {
        get: {
          tags: ['stock'],
          description: 'stock',
          operationId: 'stock',
          security: [ {bearerAuth: {}}],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                 type:String,
                },
              },
            },
            required: true,
          },
          parameters: [],
          responses: {
            '200': {
              description: 'Success',
              content: {
                'application/json': {
                  schema: {
                    $ref:'#/components/schemas/Response'
                  },
                },
              },
            },
            '400': {
              description: 'Bad Request',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Response',
                  },
                },
              },
            },
          },
        },
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
