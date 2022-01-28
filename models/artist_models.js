const mongoose = require("mongoose");
const Schema = mongoose.Schema; //
const artistSchema = new mongoose.Schema(
 {
 Name: {
    type: String, 
    // required: true, 
    // unique: true
   },
 Artwork: [{
   type:String, 
  //  required:true
 }],
 Mediums: {
    type: String, 
    // required: true
   },
 numberOfPieces: {
   type:Number, 
  //  required:true
 },
 Image: [{type:String
 }]
 });
const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;