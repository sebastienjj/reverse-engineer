const express = require('express');
const router = express.Router();
const {Artwork} =  require('../modles');

Artwork.deleteMany({}, (error, deletedArtwork)=>{
    if(error) console.log(error);
    Artwork.insertMany([

    ],
    function (error, createdArtwork) {
        if (error) {
          return console.log(error);
        }
        console.log("=== Seed Complete ===");
        console.log(createdArtwork);
      }
)
console.log(deletedArtwork);
});

router.get('/', (req, res)=>{
    Artwork.find({}, (error, foundArtwork)=>{
        if(error) return console.log(error);

    console.log(foundArtwork)
    context = {
        Artworks: foundArtwork
    }
    res.render('index.ejs',context);
    });
});

router.post('/', (req, res)=>{
    Artwork.creats(req.body, (error, createdArtwork)=>{
        if(error) return console.log(error);
       console.log(createdArtwork);
      res.redirect('/artworks');
    })
});

router.get('/new', (req, res)=>{
    res.render('new.ejs');
  });

router.get('/:artworkId', (req, res) => {
    Artwork.findById(req.params.artworkId, (error, foundArtwork) => {
        if (error) {
           console.log(error);
           res.status(404).render('404.ejs', {error: error});
        };
        return res.render('show.ejs', {artworks: foundArtwork});
    });
    
});

router.delete('/:artworkId', (req, res) => {
    Artwork.findByIdAndDelete( req.params.artworkId, (error, deletedArtwork) => {
        if (error){
        console.log(error);
        res.status(404).render('404.ejs', {error: error});
      }
        console.log(deletedArtwork);
        return res.redirect('/artworks');
    });
  });

  router.get('/:artworkId/edit', (req, res)=>{
    Artwork.findById(req.params.artworkId, (error, updatedArtwork)=>{
        if(error){
            console.log(error);
            res.status(404).render('404.ejs', {error: error});
        }
        return res.render('edit.ejs', {song: updatedArtwork});
    });
  });

  router.put('/:artworkId', (req, res)=>{
    Artwork.findByIdAndUpdate(req.params.artworkId, req.body, (error, updatedArtwork)=>{
       if(error){
           console.log(error);
           res.status(404).render('404.ejs', {error: error});
       }
       return res.redirect('/artworks');
    });
  });
  
  module.exports = router;