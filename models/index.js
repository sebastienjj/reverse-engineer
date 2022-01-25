require('../config/db.connection');
 
module.exports = {
   // This is exporting my Product model
   Artist: require('./artist_model'),
   // This is exporting my Review model
   ArtWork: require('./artWork_model'),
   // This is exporting my user model
   User: require('./user')
}
