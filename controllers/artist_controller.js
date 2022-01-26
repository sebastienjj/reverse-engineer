// const route = require('color-convert/route');
const express = require('express');
const router = express.Router();
const {Artist} = require('../models');

Artist.deleteMany({},(error, deletedArtist)=>{
    if(error)
    console.log(error);
    Artist.insertMany([
        {
            Name :'SoftRider62',
            Artwork : [ "Lost city", "Hollow mountains","Dark days","Stillness"],
            Mediums : 'Digital Art',
            numberOfPieces: '4'
        },
        {
          Name :'EiskalterEngel18',
          Artwork : [ "Van", "The ice Breaker","Liquor Store","Modern Japan"],
          Mediums : 'Digital Art',
          numberOfPieces: '4'
        },
        {
          Name :'BlackSunRising',
          Artwork : [ "Birds in love", "The barbary ground squirrel","Big_black_bird","Jumping_high"],
          Mediums : 'Digital Art',
          numberOfPieces: '4'
        },
        {
          Name :'SomeStuffIdrew',
          Artwork : [ "Chicken", "Drool","Husky","Panda"],
          Mediums : 'Ink',
          numberOfPieces: '4'
        },
    ],
    function(error, createdArtist){
        if(error){
            return console.log(error);
        }
        console.log("===seed Complete===");
        console.log(createdArtist)
    });
    console.log(deletedArtist)
});

router.get('/',(req, res)=>{
    Artist.find({}, (error, foundArtist)=>{
        if(error) 
        return console.log(error);

        console.log(foundArtist)
        res.render('index.ejs', {artists: foundArtist});
    });
});

router.post('/', (req, res)=>{
    Artist.create(req.body, (error, createdArtist)=>{
        if(error)
        console.log(error);
        console.log(createdArtist);
        res.redirect('/artist');
    });
});

router.get('/new', (req, res)=>{
    res.render('new.ejs');
});

router.get('/:artistId', (req, res)=>{
    Artist.findById(req.params.artistId, (error, foundArtist)=>{
        if(error){console.log(req.params)
        console.log(error);
        return res.status(404).render('404', {error: error});
    }
    res.render('show.ejs', {artist: foundArtist}); 
    });
});

router.delete('/:artistId', (req, res)=>{
    Artist.findByIdAndDelete(req.params.artistId, (error, deletedArtist)=>{
        if(error){
             console.log(error);
             return res.status(404).render('404.ejs', {error: error});
        }
        console.log(deletedArtist);
        return res.redirect('/artist');
    });
});

 router.get('/:artistId/edit',(req, res)=>{
     Artist.findById(req.params.artistId, (error, updateArtist)=>{
        if(error){
            console.log(error);
            return res.status(404).render('404.ejs', {error: error});
        }
        console.log(updateArtist);
        res.render('edit.ejs', {artist: updateArtist});

     });
});

router.put('/:artistId', (req, res)=>{
    console.log(`the request is ${req}`)
    Artist.findByIdAndUpdate(req.params.artistId, req.body, (error, updateArtist)=>{
        if(error){
            console.log(error);
            return res.status(404).render('404.ejs', {error: error});
        }
        console.log(updateArtist)
        return res.redirect('/artist'); 
    });
    // make sure this is the correct one or you neeed to deleteed
});
module.exports = router;