 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const artWorkSchema = new mongoose.Schema(
       {
         Artwork:[{
           type: String
         }],
 
          Mediums: {
                  type: String, 
                //   required: true
                },
          
            //or mega bytes not sure how to do this
          Image: [{
                type:String, 
                // required:true 
                }], //this isnt put in by the artist so does it need a required
});
const ArtWork = mongoose.model('ArtWork', artWorkSchema);
module.exports = ArtWork;
