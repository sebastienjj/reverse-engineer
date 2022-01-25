const express =require('express');
const app = express();

const PORT = 2000;

// app.set('veiw engine')

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