const request = require('supertest');
const app = require('../server'); // Assuming server.js exports the app
const User = require('../models/User');

jest.setTimeout(15000); // 15 second timeout

describe('Auth Routes', () => {
    beforeAll(async () => {
        await User.deleteMany(); // Clear the database before tests
    });

    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/auth/register')
            .send({ email: 'test@example.com', password: 'password123' });
        
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User registered successfully');
    });

    it('should login a user', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({ email: 'test@example.com', password: 'password123' });
        
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});
