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
            numberOfPieces: '4',
            Image:["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e7a5a6-5bb9-4d74-badc-511a4a806c8a/ddmnc55-7f4b0fde-40a3-4a4e-9f64-a5f8d0425590.jpg/v1/fill/w_444,h_250,q_70,strp/lost_city_by_softyrider62_ddmnc55-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAxIiwicGF0aCI6IlwvZlwvZjRlN2E1YTYtNWJiOS00ZDc0LWJhZGMtNTExYTRhODA2YzhhXC9kZG1uYzU1LTdmNGIwZmRlLTQwYTMtNGE0ZS05ZjY0LWE1ZjhkMDQyNTU5MC5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.pvLEAPh1mh0BywyIpmWMU6g_NfKnVuO4PfPABRB138I",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e7a5a6-5bb9-4d74-badc-511a4a806c8a/de3o8zr-202ac957-5597-453d-8028-cbcb12b16597.jpg/v1/fill/w_621,h_350,q_70,strp/hollow_mountains_by_softyrider62_de3o8zr-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIyIiwicGF0aCI6IlwvZlwvZjRlN2E1YTYtNWJiOS00ZDc0LWJhZGMtNTExYTRhODA2YzhhXC9kZTNvOHpyLTIwMmFjOTU3LTU1OTctNDUzZC04MDI4LWNiY2IxMmIxNjU5Ny5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CvtrAhr_ytTo84LY7bMQxPN3V_VqNGiiIMiw2SpfSbo",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e7a5a6-5bb9-4d74-badc-511a4a806c8a/deygrda-abb5f844-7c54-4730-9b83-037fa1131c44.jpg/v1/fill/w_1920,h_1081,q_75,strp/stillness_by_softyrider62_deygrda-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MSIsInBhdGgiOiJcL2ZcL2Y0ZTdhNWE2LTViYjktNGQ3NC1iYWRjLTUxMWE0YTgwNmM4YVwvZGV5Z3JkYS1hYmI1Zjg0NC03YzU0LTQ3MzAtOWI4My0wMzdmYTExMzFjNDQuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4NOmqXEyNcL4ia44Zu8AwhFrX8gW7D1tww_7uy-cknA"]
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
            return cosole.log(error);
        }
        console.log("===seed Complete===");
        console.log(createdArtist)
    })
    console.log(deletedArtist)
});

router.get('/',(req, res)=>{
    Artist.find({}, (error, foundArtist)=>{
        if(error) 
        return console.log(error);

        console.log(foundArtist)
        res.render('artist/index1.ejs', {artists: foundArtist});
    })
});

router.post('/', (req, res)=>{
    Artist.create(req.body, (error, createdArtist)=>{
        if(error)
        console.log(error);
        console.log(createdArtist);
        res.redirect('/artists');
    })
});

router.get('/new', (req, res)=>{
    res.render('artist/new1.ejs');
});

router.get('/:artistId', async(req, res, next)=>{
    try{
        const artist = await Artist.findById(req.params.artistId)
        const context = {artist}
        console.log("==============================================")
        console.log(context)
        console.log("==============================================")
        return res.render('artist/show1.ejs', context)
    }
    catch(error){
        console.log(error)
        res.status(404).render('404.ejs', {error: error})
        return next()
    }
});

router.delete('/:artistId', (req, res)=>{
    Artist.findByIdAndDelete(req.params.artistId, (error, deletedArtist)=>{
        if(error){
             console.log(error);
             return res.status(404).render('404.ejs', {error: error});
        }
        console.log(deletedArtist);
        return res.redirect('/artists');
    })
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
        return res.redirect('/artists'); 
    });
    
});
module.exports =router;