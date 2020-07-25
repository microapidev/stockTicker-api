import app from '../../src/app';
import request from 'supertest';

describe('Financial Info', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app).get('/api/v1/company/GOOGL/metric');
    expect(res.status).toBe(200);
  }, 10000);
});

describe('Company Info', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app).get('/api/v1/company/GOOGL/profile');
    expect(res.status).toBe(200);
  }, 10000);
});

describe('Company Stock Quote', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app).get('/api/v1/company/GOOGL/stock');
    expect(res.status).toBe(200);
  }, 10000);
});
describe('connect websockets response', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app).get('/api/v1');
    expect(res.status).toBe(200);
  }, 10000);
});
