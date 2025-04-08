const request = require('supertest');
const { startMongoMemoryServer, stopMongoMemoryServer } = require('../../testHelpers/mongoMemoryServerSetup');
const app = require('../server');
const User = require('../models/User');

beforeAll(async () => {
  await startMongoMemoryServer();
}, 10000); // 10 second timeout

afterAll(async () => {
  await stopMongoMemoryServer();
}, 10000);

afterEach(async () => {
  await User.deleteMany({});
}, 10000);

describe('Auth Routes', () => {
  // Test cases will go here
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toEqual('User registered successfully');
  });

  it('should login a user', async () => {
    // First register a user
    await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });

    // Then test login
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });
      
    console.log('Login response:', loginRes.body); // Debug logging
    
    if (loginRes.statusCode !== 200) {
      console.error('Login error:', loginRes.body.error || loginRes.body);
    }
    
    expect(loginRes.statusCode).toEqual(200);
    expect(loginRes.body).toHaveProperty('token');
    expect(typeof loginRes.body.token).toBe('string');
  });
});
