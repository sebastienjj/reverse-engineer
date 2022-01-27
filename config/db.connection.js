const mongoose = require('mongoose');

// const connectionStr = 'mongodb://127.0.0.1/arts';

 const connectionStr ="mongodb+srv://JayUser1:JayUser1@cluster0.ab94z.mongodb.net/project2data?retryWrites=true&w=majority"

mongoose.connect(connectionStr,
    { useNewUrlParser: true,
    useUnifiedTopology: true
    },
    ()=>{
        console.log('Connected to MongoDB');
    }
    );

mongoose.connection.on('connected', () => {
    
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
});

mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error 😥', error);
});

mongoose.connection.on('disconnected', () => 

console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));