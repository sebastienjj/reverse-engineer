const mongoose = require("mongoose");
const Schema = mongoose.Schema; //
const artistSchema = new mongoose.Schema(
 {
 Name: {
    type: String, required: true, unique: true
   },
 Artwork: [{
   type:String, required:true
 }],
 Mediums: {
    type: String, required: true
   },
 numberOfPieces: {
   type:Number, required:true
 },
 });
const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;
Artist =[
 {
     Name :'SoftRider62',
     Artwork : [ "Lost city", "Hollow mountains","Dark days","Stillness"],
     Mediums : 'Digitala Art',
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
   Mediums : 'Digitala Art',
   numberOfPieces: '4'
 },
 {
   Name :'SomeStuffIdrew',
   Artwork : [ "Chicken", "Drool","Husky","Panda"],
   Mediums : 'Ink',
   numberOfPieces: '4'
 }
]
