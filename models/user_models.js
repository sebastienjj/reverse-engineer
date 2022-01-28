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
                    // required:true,
                    // min:7
                  },
        Age: {
              commentDate: Date , 
              // require:true
              },
        Favourites: [
            {
              type:String, 
              // required:true
            }
        ],
        Size: {
              type:String, 
              // required:true
            }, 
        Like: {
              type:Number, 
              // required:true
          }, 
});
 
const User = mongoose.model('User', userSchema);
module.exports = User;