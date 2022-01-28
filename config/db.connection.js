const mongoose = require('mongoose');

const connectionStr = "mongodb://127.0.0.1:27017/arts";
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