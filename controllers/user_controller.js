const express = require('express');
const router = express.Router();
const {User} =require('../models');

User.deleteMany({}, (error, deletedUser) => {
    if(error) console.log(error);
User.insertMany(
        [



        ],
        function (error, createdUser) {
          if (error) {
            return console.log(error);
          }
          console.log("=== Seed Complete ===");
          console.log(createdUser);
        }
  )
  console.log(deletedUser)
});



router.get('/', (req, res) => {
User.find({}, (error, foundUser) => {
    if(error) return console.log(error);

    console.log(foundUser)
    context = {
        users: foundUser
    }
    res.render('index.ejs', context);
})
});

router.post('/', (req, res) =>{
User.create(req.body, (error, createdUser) =>{
      if(error) return console.log(error);
       console.log(createdUser);
      res.redirect('/users');
  })
})

router.get('/new', (req, res)=>{
  res.render('new.ejs');
});

router.get('/:userId', (req, res) => {
User.findById(req.params.userId, (error, foundUser) => {
      if (error) {
         console.log(error);
         res.status(404).render('404.ejs', {error: error});
      };
      return res.render('show.ejs', {Users: foundUser});
  });
  
});

router.delete('/:userId', (req, res) => {
User.findByIdAndDelete( req.params.userId, (error, deletedUser) => {
      if (error){
      console.log(error);
      res.status(404).render('404.ejs', {error: error});
    }
      console.log(deletedUser);
      return res.redirect('/users');
  });
});

router.get('/:userId/login', (req, res)=>{
User.findById(req.params.userId, (error, updatedUser)=>{
      if(error){
          console.log(error);
          res.status(404).render('404.ejs', {error: error});
      }
      return res.render('login.ejs', {users: updatedUser});
  });
});

router.put('/:userId', (req, res)=>{
User.findByIdAndUpdate(req.params.userId, req.body, (error, updatedUser)=>{
     if(error){
         console.log(error);
         res.status(404).render('404.ejs', {error: error});
     }
     console.log(updatedUser);
     return res.redirect('/users');
  });
});

module.exports = router;