const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const favoriteSchema = mongoose.Schema({
    //ObjectId하나로 User모델내부에있는것 조회가능
    userFrom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String
    },
    movieTitle: {
        type: String
    },
    moviePost: {
        type: String
    },
    movieRunTime: {
        type: String
    }
},{timestamps: true})//생성시간 자동으로해줌




const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }