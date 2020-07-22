import app from '../src/app';
const request = require('supertest');

describe('Dummy Test', () => {
  jest.setTimeout(30000);
  test('should respond with status code 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
