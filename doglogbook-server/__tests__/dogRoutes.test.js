const request = require('supertest');
const app = require('../server'); // Assuming server.js exports the app
const User = require('../models/User');
const Dog = require('../models/Dog');

describe('Dog Routes', () => {
    let token;
    let userId;

    beforeAll(async () => {
        await User.deleteMany(); // Clear the database before tests
        const user = await new User({ email: 'test@example.com', password: 'password123' }).save();
        userId = user._id;
        const response = await request(app)
            .post('/api/auth/login')
            .send({ email: 'test@example.com', password: 'password123' });
        token = response.body.token;
    });

    afterAll(async () => {
        await Dog.deleteMany(); // Clear the dog collection after tests
        await User.deleteMany(); // Clear the user collection after tests
    });

    it('should create a new dog profile', async () => {
        const response = await request(app)
            .post('/api/dogs')
            .set('Authorization', `Bearer ${token}`)
            .send({ name: 'Buddy', breed: 'Golden Retriever', birthday: '2020-01-01' });
        
        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Buddy');
    });

    it('should get all dogs for a user', async () => {
        const response = await request(app)
            .get('/api/dogs')
            .set('Authorization', `Bearer ${token}`);
        
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
