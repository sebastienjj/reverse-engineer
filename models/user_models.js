const mongoose = require("mongoose");
const Schema = mongoose.Schema; //
const userSchema = new mongoose.Schema(
 {
 UserName: {
    type: String, 
    // required: true, unique: true
   },
 Password: {
   type:String, 
  //  required:true,
   min:7
    },//set minimumlimit?
 Age: {
   commentDate: Date , 
  //  require:true
 },
 Favourites: [{
     type:String, 
    //  required:true
   }],
 Size: {
   type:String, 
  //  required:true
   }, //or mega bytes not sure how to do this
 Like: {
   type:Number, 
  //  required:true
 }, //this isnt put in by the artist so does it need a required
});
 
const User = mongoose.model('User', userSchema);
module.exports = User;