const express = require('express');
const router = express.Router();
const {ArtWork} =  require('../models');

ArtWork.deleteMany({}, (error, deletedArtWork)=>{
    if(error) console.log(error);
    ArtWork.insertMany(
      [
        {
            Title: "Lost city",
            Artist: "SoftRider62",
            Mediums: "Digital Art",
            Date: "December 2019",
            Image:"https://imgur.com/K8iCSyy"
        },
        {
            Title: "Hollow mountains",
            Artist: "SoftRider62",
            Mediums: "Digital Art",
            Date: "Janurary 2022",    
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e7a5a6-5bb9-4d74-badc-511a4a806c8a/de3o8zr-202ac957-5597-453d-8028-cbcb12b16597.jpg/v1/fill/w_621,h_350,q_70,strp/hollow_mountains_by_softyrider62_de3o8zr-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIyIiwicGF0aCI6IlwvZlwvZjRlN2E1YTYtNWJiOS00ZDc0LWJhZGMtNTExYTRhODA2YzhhXC9kZTNvOHpyLTIwMmFjOTU3LTU1OTctNDUzZC04MDI4LWNiY2IxMmIxNjU5Ny5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CvtrAhr_ytTo84LY7bMQxPN3V_VqNGiiIMiw2SpfSbo"
        },
        {
            Title: "Dark days",
            Artist: "SoftRider62",
            Mediums: "Digital Art",
            Date: "December 2021", 
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e7a5a6-5bb9-4d74-badc-511a4a806c8a/dex66gp-8e6616c4-647b-4444-8045-c2a4b4646b6c.jpg/v1/fill/w_444,h_250,q_70,strp/dark_days_by_softyrider62_dex66gp-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MSIsInBhdGgiOiJcL2ZcL2Y0ZTdhNWE2LTViYjktNGQ3NC1iYWRjLTUxMWE0YTgwNmM4YVwvZGV4NjZncC04ZTY2MTZjNC02NDdiLTQ0NDQtODA0NS1jMmE0YjQ2NDZiNmMuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oYiIKMa4VosExPuEDCwTBR1-70hxaIxslH8qh6a3x9I"
        },
        {
            Title: "Stillness",
            Artist: "SoftRider62",
            Mediums: "Digital Art",
            Date: "Janurary 2022", 
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4e7a5a6-5bb9-4d74-badc-511a4a806c8a/deygrda-abb5f844-7c54-4730-9b83-037fa1131c44.jpg/v1/fill/w_1920,h_1081,q_75,strp/stillness_by_softyrider62_deygrda-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MSIsInBhdGgiOiJcL2ZcL2Y0ZTdhNWE2LTViYjktNGQ3NC1iYWRjLTUxMWE0YTgwNmM4YVwvZGV5Z3JkYS1hYmI1Zjg0NC03YzU0LTQ3MzAtOWI4My0wMzdmYTExMzFjNDQuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4NOmqXEyNcL4ia44Zu8AwhFrX8gW7D1tww_7uy-cknA"
        },
        {
            Title: "Van",
            Artist: "EiskalterEngel18",
            Mediums: "Digital Art",
            Date: "Jan 15, 2022", 
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey5x2f-172149ca-6b99-4bf8-a922-643cdf87019f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5NXgyZi0xNzIxNDljYS02Yjk5LTRiZjgtYTkyMi02NDNjZGY4NzAxOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Mg1JKRbvqvNGhS6YhkIBt6dgnauXKKgnEtfBy3v79aI"
        },
        {
            Title: "The Ice Breaker",
            Artist: "EiskalterEngel18",
            Mediums: "Digital Art",
            Date: "Jan 13, 2022", 
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dey2k46-8d66b2bb-6747-436c-b52c-8961a8106e8d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JjNDcxOTRjLTQzODktNDBiMi1iMTMwLWUzZGU3NmRiNGVhMFwvZGV5Mms0Ni04ZDY2YjJiYi02NzQ3LTQzNmMtYjUyYy04OTYxYTgxMDZlOGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UsIalYQ3nLFC9_50VXRH2JTZzb4CD_jJjbDuvN98TJc"
        },
        {
            Title: "Liquor Store",
            Artist: "EiskalterEngel18",
            Mediums: "Digital Art",
            Date: " Sep 20, 2021", 
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/derco66-fe67779c-9587-4cfd-8dd3-3da5140cc0ea.png/v1/fill/w_1280,h_816,q_80,strp/liquor_store_by_eiskalterengel18_derco66-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE2IiwicGF0aCI6IlwvZlwvYmM0NzE5NGMtNDM4OS00MGIyLWIxMzAtZTNkZTc2ZGI0ZWEwXC9kZXJjbzY2LWZlNjc3NzljLTk1ODctNGNmZC04ZGQzLTNkYTUxNDBjYzBlYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lPVi1z0rT8cyAUhbLsd8lcvFvgUKZTgtAFswiV9DQW8"
        },
        {
            Title: "Modern Japan",
            Artist: "EiskalterEngel18",
            Mediums: "Digital Art",
            Date: "Jun 2, 2021", 
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc47194c-4389-40b2-b130-e3de76db4ea0/dekrk0v-4d65c814-c666-4629-ac31-5c56986a2e34.png/v1/fill/w_700,h_324,q_70,strp/modern_japan_by_eiskalterengel18_dekrk0v-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk0IiwicGF0aCI6IlwvZlwvYmM0NzE5NGMtNDM4OS00MGIyLWIxMzAtZTNkZTc2ZGI0ZWEwXC9kZWtyazB2LTRkNjVjODE0LWM2NjYtNDYyOS1hYzMxLTVjNTY5ODZhMmUzNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NWqFIckxgZ3H8BPHblF8LN_QLfAKewvcRKnuqPg7tUI"
        },
        {
            Title: "Jumping_high",
            Artist: "BlackSunRising",
            Mediums: "Digital Art",
            Date: "Jun 9, 2015", 
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/614579ca-8f9d-4559-b178-152894c39639/d8wnb3s-4fa3a5d1-b097-42fb-9109-2fdac2ba9f05.jpg/v1/fill/w_1280,h_855,q_75,strp/jumping_high_by_blacksunrising_d8wnb3s-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvNjE0NTc5Y2EtOGY5ZC00NTU5LWIxNzgtMTUyODk0YzM5NjM5XC9kOHduYjNzLTRmYTNhNWQxLWIwOTctNDJmYi05MTA5LTJmZGFjMmJhOWYwNS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WvHttaWz5_JBolDDEXia86ihPVkV86hTH8ESgrv91KQ"
        },
        {
            Title: "Birds in love",
            Artist: "BlackSunRising",
            Mediums: "Digital Art",
            Date: "Oct 27, 2017", 
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/614579ca-8f9d-4559-b178-152894c39639/dbrv3oi-698d31aa-1e50-40cd-977e-dde6f2ae6267.jpg/v1/fill/w_1280,h_855,q_75,strp/birds_in_love_by_blacksunrising_dbrv3oi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvNjE0NTc5Y2EtOGY5ZC00NTU5LWIxNzgtMTUyODk0YzM5NjM5XC9kYnJ2M29pLTY5OGQzMWFhLTFlNTAtNDBjZC05NzdlLWRkZTZmMmFlNjI2Ny5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.cMfJ_C4OsvhlNr_nSlMII_1On1L7oDbunp8Hv2qgY9E"
        },
        {
            Title: "The barbary ground squirrel",
            Artist: "BlackSunRising",
            Mediums: "Digital Art",
            Date: "Apr 5, 2016", 
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/614579ca-8f9d-4559-b178-152894c39639/d9xx2at-a1fb116b-209c-44b2-96bf-98052efbd8dc.jpg/v1/fill/w_1280,h_855,q_75,strp/the_barbary_ground_squirrel_by_blacksunrising_d9xx2at-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvNjE0NTc5Y2EtOGY5ZC00NTU5LWIxNzgtMTUyODk0YzM5NjM5XC9kOXh4MmF0LWExZmIxMTZiLTIwOWMtNDRiMi05NmJmLTk4MDUyZWZiZDhkYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.c1pjbd3cyJ09nUbKruCMY4fbOb-Y2aleHr8whF7Ed0k"
        },
        {
            Title: "Big_black_bird",
            Artist: "BlackSunRising",
            Mediums: "Digital Art",
            Date: " Apr 28, 2016", 
            Image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/614579ca-8f9d-4559-b178-152894c39639/da0n284-2b6b4764-e9d9-434b-b65d-9ba96860c9a8.jpg/v1/fill/w_1280,h_855,q_75,strp/big_black_bird_by_blacksunrising_da0n284-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU1IiwicGF0aCI6IlwvZlwvNjE0NTc5Y2EtOGY5ZC00NTU5LWIxNzgtMTUyODk0YzM5NjM5XC9kYTBuMjg0LTJiNmI0NzY0LWU5ZDktNDM0Yi1iNjVkLTliYTk2ODYwYzlhOC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ub9wGbeQlnFvgudULXqSbvGrSQWIBGnOgF4r5QY5yDM"
        },
        {
            Title: "Chicken",
            Artist: "SomeStuffIdrew",
            Mediums: "Ink",
            Date: " Apr 28, 2016", 
            Image:""
        },
        {
            Title: "Drool",
            Artist: "SomeStuffIdrew",
            Mediums: "Ink",
            Date: " Apr 28, 2016", 
            Image:""
        },
        {
            Title: "Husky",
            Artist: "SomeStuffIdrew",
            Mediums: "Ink",
            Date: " Apr 28, 2016", 
            Image:""
        },
        {
            Title: "Panda",
            Artist: "SomeStuffIdrew",
            Mediums: "Ink",
            Date: " Apr 28, 2016", 
            Image:""
        },
    ],
    function (error, createdArtWork) {
        if (error) {
          return console.log(error);
        }
        console.log("=== Seed Complete ===");
        console.log(createdArtWork);
      }
  )
    console.log(deletedArtWork);
});

router.get('/', (req, res)=>{
  ArtWork.find({}, (error, foundArtWork)=>{
        if(error) return console.log(error);

    console.log(foundArtWork)
    context = {
      artworks: foundArtWork
    }
    res.render('index.ejs',context);
    });
});

router.post('/', (req, res)=>{
  ArtWork.creats(req.body, (error, createdArtWork)=>{
        if(error) return console.log(error);
       console.log(createdArtWork);
      res.redirect('/artworks');
    })
});

router.get('/new', (req, res)=>{
    res.render('new.ejs');
  });

router.get('/:artworkId', (req, res) => {
    ArtWork.findById(req.params.artworkId, (error, foundArtWork) => {
        if (error) {
           console.log(error);
           res.status(404).render('404.ejs', {error: error});
        };
        return res.render('show.ejs', {artworks: foundArtWork});
    });
    
});

router.delete('/:artworkId', (req, res) => {
  ArtWork.findByIdAndDelete( req.params.artworkId, (error, deletedArtWork) => {
        if (error){
        console.log(error);
        res.status(404).render('404.ejs', {error: error});
      }
        console.log(deletedArtWork);
        return res.redirect('/artworks');
    });
  });

  router.get('/:artworkId/edit', (req, res)=>{
    ArtWork.findById(req.params.artworkId, (error, updatedArtWork)=>{
        if(error){
            console.log(error);
            res.status(404).render('404.ejs', {error: error});
        }
        return res.render('edit.ejs', {song: updatedArtWork});
    });
  });

  router.put('/:artworkId', (req, res)=>{
    ArtWork.findByIdAndUpdate(req.params.artworkId, req.body, (error, updatedArtWork)=>{
       if(error){
           console.log(error);
           res.status(404).render('404.ejs', {error: error});
       }
       console.log(updatedArtWork);
       return res.redirect('/artworks');
    });
  });
  
  module.exports = router;