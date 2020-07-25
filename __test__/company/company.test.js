const app = require('../../src/app');
const request = require('supertest');

describe('Financial Info', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app)
      .get('/api/v1/company/GOOGL/metric')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNWYxYjkzMTIyMGE5N2UyNGM4ZGNhNDc2IiwiaWF0IjoxNTk1NjQyNjg2LCJleHAiOjE1OTgyMzQ2ODZ9.X3IYo_uyOGpdBVQvwz84FyjL4e5PTphHrCtQBdR2Bw4'
      );
    expect(res.status).toBe(200);
  }, 10000);
});

describe('Company Info', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app)
      .get('/api/v1/company/GOOGL/profile')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNWYxYjkzMTIyMGE5N2UyNGM4ZGNhNDc2IiwiaWF0IjoxNTk1NjQyNjg2LCJleHAiOjE1OTgyMzQ2ODZ9.X3IYo_uyOGpdBVQvwz84FyjL4e5PTphHrCtQBdR2Bw4'
      );
    expect(res.status).toBe(200);
  }, 10000);
});

describe('Company Stock Quote', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app)
      .get('/api/v1/company/GOOGL/stock')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNWYxYjkzMTIyMGE5N2UyNGM4ZGNhNDc2IiwiaWF0IjoxNTk1NjQyNjg2LCJleHAiOjE1OTgyMzQ2ODZ9.X3IYo_uyOGpdBVQvwz84FyjL4e5PTphHrCtQBdR2Bw4'
      );
    expect(res.status).toBe(200);
  }, 10000);
});

