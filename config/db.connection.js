const mongoose = require('mongoose');

<<<<<<< HEAD
// const connectionStr = 'mongodb://127.0.0.1/arts';

 const connectionStr ='mongodb+srv://sei:bluedeviles@sei.7r9b2.mongodb.net/ProjectToDatabase?retryWrites=true&w=majority';

=======
const connectionStr = 'mongodb+srv://sei:bluedeviles@sei.7r9b2.mongodb.net/ProjectToDatabase?retryWrites=true&w=majority';

>>>>>>> development
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