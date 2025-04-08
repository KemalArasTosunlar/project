const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

let mongoServer;
let isConnected = false;

async function startMongoMemoryServer() {
  // Only connect if not already connected
  if (!isConnected) {
    // Load test environment variables
    dotenv.config({ path: '.env.test' });
    
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    
    await mongoose.connect(mongoUri);
    isConnected = true;
  }
}

async function stopMongoMemoryServer() {
  if (isConnected) {
    await mongoose.disconnect();
    await mongoServer.stop();
    isConnected = false;
  }
}

module.exports = {
  startMongoMemoryServer,
  stopMongoMemoryServer
};
