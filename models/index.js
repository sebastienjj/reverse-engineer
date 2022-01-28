require('../config/db.connection');
 
module.exports = {
   Artist: require('./artist_models'),
   ArtWork: require('./artWork_models'),
   User: require('./user_models')
}

