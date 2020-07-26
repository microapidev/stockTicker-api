const openApiDocumentation = {
  swagger: '3.0',
  openapi: '3.0.0',
  info: {
    title: ' Dockerized Stock Micro Service',
    description: 'A Dockerized Microservice for Stock Ticker',
    contact: {
      name: 'Stock Ticker API'
    }
  },
  server: [
    {
      url: 'http:localhost:5000',
      description: 'Local Server'
    }
  ],
  tags: [
    {
      name: 'CRUD Operations Routes'
    }
  ],
  security: {
    bearerAuth: {}
  },
  paths: {
    'api/v1': {
      post: {
        tags: ['Register Admin'],
        description: 'Registers admin',
        operationId: 'register',
        security: [],
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
        parameters: [],
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
    'api/v1/:adminId': {
      get: {
        tags: ['Admin'],
        description: 'Registered admin',
        operationId: 'registered',
        security: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: "Object",
                properties:{
                  type: "string"
                }

              }
            }
          },
          required: true
        },
        parameters: [],
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
    'api/v1/:adminId/key': {
      get: {
        tags: ['Api key'],
        description: 'admin key',
        operationId: 'api key',
        security: [
          {
            bearerAuth: {}
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: "string"
              }
            }
          },
          required: true
        },
        parameters: [],
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
    'api/v1/:symbol/profile': {
      get: {
        tags: ['Profile'],
        description: 'company profile',
        operationId: 'register',
        security: [
          {
            bearerAuth: {}
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: "Object",
                $ref:'#/components/schemas/profile',
                properties:{
                  type: "string"
                }
              }
            }
          },
          required: true
        },
        parameters: [],
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
    'api/v1/:symbol/metric': {
      get: {
        tags: ['metric'],
        description: 'metric',
        operationId: 'metric',
        security: [
          {
            bearerAuth: {}
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: "Object",
                $ref:'#/components/schemas/metric',
                properties:{
                  metric: "string"
                }
              }
            }
          },
          required: true
        },
        parameters: [],
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
    'api/v1/:symbol/stock': {
      get: {
        tags: ['stock'],
        description: 'stock',
        operationId: 'stock',
        security: [
          {
            bearerAuth: {}
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: "object",
                $ref:'#/components/schemas/quote',
                properties: {
                  stock: {
                    type: "string",
                  },
                },
              },
            },
          },
          required: true
        },
        parameters: [],
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
            },
            data: {
              type: 'object'
            }
          }
        },
        v1: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
              description:'Email Address'
            }
          }
        },
        profile: {
          type: 'object',
          properties: {
            symbol: {
              type: 'string',
              description:'Company Symbol on stock exchange E.g(Google symbol is GOOGL)' 
            }
          }
        },
        metric: {
          type: 'object',
          properties: {
            symbol: {
              type: 'string',
              description:'Company Symbol on stock exchange E.g(Google symbol is GOOGL)' 
            }
          }
        },
        quote: {
          type: 'object',
          properties: {
            symbol: {
              type: 'string',
              description:'Company Symbol on stock exchange E.g(Google symbol is GOOGL)' 
            }
          }
        },
        
      }
    }
  }
};
module.exports = openApiDocumentation;
