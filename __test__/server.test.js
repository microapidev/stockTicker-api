import app from '../src/app';
const request = require('supertest');

describe('Dummy Test', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  }, 10000);
});

describe('Financial Info', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app).get('/v1/metric?symbol=GOOGL');
    expect(res.status).toBe(200);
  }, 10000);
});

describe('Company Info', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app).get('/v1/companyProfile?symbol=GOOGL');
    expect(res.status).toBe(200);
  }, 10000);
});
describe('app', () => {
  it('connect websockets response', (done) => {
      expect.assertions(1);

      const ws = new WebSocket(`ws://localhost:3000`)
          .on('message', (msg) => {
              expect(JSON.parse(msg).id).toEqual(0);
              ws.close();
          })
          .on('close', () => done());
  });
});