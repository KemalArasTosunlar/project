const request = require('supertest');
const app = require('../server'); // Assuming server.js exports the app
const User = require('../models/User');
const Dog = require('../models/Dog');
const Log = require('../models/Log');

describe('Log Routes', () => {
    let token;
    let userId;
    let dogId;

    beforeAll(async () => {
        await User.deleteMany(); // Clear the database before tests
        const user = await new User({ email: 'test@example.com', password: 'password123' }).save();
        userId = user._id;
        const response = await request(app)
            .post('/api/auth/login')
            .send({ email: 'test@example.com', password: 'password123' });
        token = response.body.token;

        const dog = await new Dog({ name: 'Buddy', breed: 'Golden Retriever', birthday: '2020-01-01', userId }).save();
        dogId = dog._id;
    });

    afterAll(async () => {
        await Log.deleteMany(); // Clear the log collection after tests
        await Dog.deleteMany(); // Clear the dog collection after tests
        await User.deleteMany(); // Clear the user collection after tests
    });

    it('should add a daily log for a specific dog', async () => {
        const response = await request(app)
            .post(`/api/logs/${dogId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ activity: 'Walk', duration: 30 });
        
        expect(response.status).toBe(201);
        expect(response.body.activity).toBe('Walk');
    });

    it('should get logs for a specific dog', async () => {
        const response = await request(app)
            .get(`/api/logs/${dogId}`)
            .set('Authorization', `Bearer ${token}`);
        
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
