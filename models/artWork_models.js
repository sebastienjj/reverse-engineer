 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const artWorkSchema = new mongoose.Schema(
       {
 Title: {
         type: String,
         required: true, unique: true
        },
 Artist: {
         type:String, required:true
       },
 Mediums: {
         type: String, required: true
       },
 Date: {
         commentDate: Date , require:true
       },
   //or mega bytes not sure how to do this
 Image: {
       type:Number, required:true 
       }, //this isnt put in by the artist so does it need a required
});
const ArtWork = mongoose.model('ArtWork', artWorkSchema);
module.exports = ArtWork;
