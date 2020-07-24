import app from '../src/app';
const request = require('supertest');

describe('Dummy Test', () => {
  test('should respond with status code 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  }, 10000);
});
describe('app', () => {
  it('connect websockets response', (done) => {
      expect.assertions(1);

      const ws = new WebSocket(`ws://localhost:${port}`)
          .on('message', (msg) => {
              expect(JSON.parse(msg).id).toEqual(0);
              ws.close();
          })
          .on('close', () => done());
  });
});