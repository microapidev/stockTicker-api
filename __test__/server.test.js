const app = require('../src/app');
const request = require('supertest');

describe('Dummy Test', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  }, 10000);
});
