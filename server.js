const express =require('express');
const app = express();
const methodOverride = require('method-override');
const controllers = require('./controllers')

const PORT = 2000;

app.set('view engine', 'ejs');

// App.use for adding 
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'))

app.use('/artists', controllers.artist)
app.use('/artwork', controllers.artwork)
app.use('/user', controllers.user)


// app.use((req, res, next) => {    
//     console.log("I'm running for another new route")
// 	console.log(`${req.method} ${req.originalUrl}`);    
// 	next();
// });


app.get('/',(req, res)=>{
    res.send('Hello world');
});

 app.get('/*', (req, res)=>{
     return res.sendStatus(404)
    //  .render('404',)
 })
 app.listen(PORT, ()=>
 console.log(`listening for client requests on port ${PORT}`)
 );