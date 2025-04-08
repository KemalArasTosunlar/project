const request = require('supertest');
const app = require('../server'); // Assuming server.js exports the app
const User = require('../models/User');
const Reminder = require('../models/Reminder');

jest.setTimeout(15000); // 15 second timeout

describe('Reminder Routes', () => {
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
        await Reminder.deleteMany(); // Clear the reminder collection after tests
        await User.deleteMany(); // Clear the user collection after tests
    });

    it('should create a new reminder', async () => {
        const response = await request(app)
            .post('/api/reminders')
            .set('Authorization', `Bearer ${token}`)
            .send({ title: 'Vet Appointment', date: '2023-05-01T10:00:00Z' });
        
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Vet Appointment');
    });

    it('should get all reminders for a user', async () => {
        const response = await request(app)
            .get('/api/reminders')
            .set('Authorization', `Bearer ${token}`);
        
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
