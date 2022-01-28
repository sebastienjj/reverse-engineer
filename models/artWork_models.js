
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const artWorkSchema = new mongoose.Schema(
       {
         Artwork:[
            {
              type: String
            }
          ],
 
          Mediums: {
                  type: String, 
                  required: true
                },
          
            
          Image: [
            {
              type:String, 
              required:true 
            }
          ], 
});
const ArtWork = mongoose.model('ArtWork', artWorkSchema);
module.exports = ArtWork;
