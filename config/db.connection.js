const mongoose = require('mongoose');

const connectionStr = 'mongodb://127.0.0.1/product';

mongoose.connect(connectionStr)

mongoose.connection.on('connected', () => {
    
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
});

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error 😥', error);
});

mongoose.connection.on('disconnected', () => 

console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));