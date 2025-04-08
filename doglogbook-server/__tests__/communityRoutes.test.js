const request = require('supertest');
const app = require('../server'); // Assuming server.js exports the app
const User = require('../models/User');
const Post = require('../models/Post');

describe('Community Routes', () => {
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
        await Post.deleteMany(); // Clear the post collection after tests
        await User.deleteMany(); // Clear the user collection after tests
    });

    it('should create a new community post', async () => {
        const response = await request(app)
            .post('/api/community')
            .set('Authorization', `Bearer ${token}`)
            .send({ title: 'Dog Training Tips', content: 'Here are some tips for training your dog.' });
        
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Dog Training Tips');
    });

    it('should get recent community posts', async () => {
        const response = await request(app)
            .get('/api/community')
            .set('Authorization', `Bearer ${token}`);
        
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
