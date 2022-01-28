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

app.use('/artist', controllers.artist)
app.use('/artwork', controllers.artwork)
app.use('/user', controllers.user)

app.get('/',(req, res)=>{
    res.send('Hello world');
});

 app.get('/*', (req, res)=>{
     return res.status(404).render('404', {error: req.error})
 });

 app.listen(process.env.PORT || PORT, ()=>
 console.log(`listening for client requests on port ${PORT}`)
 );