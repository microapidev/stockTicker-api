const openApiDocumentation = {
  swagger: '3.0',
  openapi: '3.0.1',
  info: {
    title: 'A Dockerized Stock-Ticker Micro-Service',
    description: 'A Dockerized Microservice for accessing information of companies listed on major stock exchanges e.g NYSE, NASDAQ.\nGet company profile, financial metrics, and stock quotes to make better stock investment decisions.',
    contact: {
      name: 'HNGi'
    }
  },
  server: [
    {
      url: 'http:localhost:3000',
      description: 'Local Server'
    },
    {
      url: 'stock-ticker-microapi.herokuapp.com',
      description: 'Staging Server'
    }
  ],
  schemes: [
    'HTTP',
    'HTTPS'
  ],
  security: {
    bearerAuth: {}
  },
  paths: {
    '/api/v1/admin': {
      post: {
        tags: ['Register admin'],
        description: 'Register as an admin, to get authorization to use this service',
        operationId: 'register',
        security: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Admin'
              }
            }
          },
          required: true
        },
        parameters: [],
        responses: {
          '201': {
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
    '/api/v1/admin/{adminId}': {
      get: {
        tags: ['Get admin'],
        description: 'Get a registered admin\'s details',
        operationId: 'registered',
        security: [],
        requestBody: {},
        parameters: [
          {
            name: 'adminId',
            in: 'path',
            schema: {
              type: 'string',
            },
            required: true,
          }
        ],
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
    '/api/v1/admin/{adminId}/key': {
      get: {
        tags: ['Get access key'],
        description: 'Get admin api access key. You can use this generic adminID to get an api authorization key: 5f1b931220a97e24c8dca476. Then pass the apiKey to authorization as bearer to access secured enpoints',
        operationId: 'api key',
        security: [],
        requestBody: {},
        parameters: [
          {
            name: 'adminId',
            in: 'path',
            schema: {
              type: 'string',
            },
            required: true,
          }
        ],
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
    '/api/v1/company/{symbol}/profile': {
      get: {
        tags: ['Company profile'],
        description: 'Get a single company\'s profile. Pass in a stock ticker in URL path as symbol, e.g AAPL, TSLA, MSFT, GOOGL. You can pass in this generic adminID to path parameters: 5f1b931220a97e24c8dca476',
        operationId: 'companyprofile',
        security: [
          {
            bearerAuth: {}
          }
        ],
        requestBody: {},
        parameters: [
          {
            name: 'symbol',
            in: 'path',
            schema: {
              type: 'string',
            },
            required: true,
          }
        ],
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
          },
          '401': {
            description: 'Unauthorized',
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
    '/api/v1/company/{symbol}/metric': {
      get: {
        tags: ['Company metric'],
        description: 'Get a single company\'s financial metrics. Pass in a stock ticker in URL path as symbol, e.g AAPL, TSLA, MSFT, GOOGL. You can pass in this generic adminID to path parameters: 5f1b931220a97e24c8dca476',
        operationId: 'metric',
        security: [
          {
            bearerAuth: {}
          }
        ],
        requestBody: {},
        parameters: [
          {
            name: 'symbol',
            in: 'path',
            schema: {
              type: 'string',
            },
            required: true,
          }
        ],
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
          },
          '401': {
            description: 'Unauthorized',
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
    '/api/v1/company/{symbol}/stock': {
      get: {
        tags: ['Company stock quote'],
        description: 'Get a single company\'s stock quote. Pass in a stock ticker in URL path as symbol, e.g AAPL, TSLA, MSFT, GOOGL. You can pass in this generic adminID to path parameters: 5f1b931220a97e24c8dca476',
        operationId: 'stock',
        security: [
          {
            bearerAuth: {}
          }
        ],
        requestBody: {},
        parameters: [
          {
            name: 'symbol',
            in: 'path',
            schema: {
              type: 'string',
            },
            required: true,
          }
        ],
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
          },
          '401': {
            description: 'Unauthorized',
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
          },
          data: {
            type: 'object'
          }
        }
      },
      Admin: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description:'Email Address'
          }
        }
      },
    },
    responses: {
      UnauthorizedError: {
        description: 'Access token is missing or invalid'
      }
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
      },
    },
  }
};
module.exports = openApiDocumentation;
