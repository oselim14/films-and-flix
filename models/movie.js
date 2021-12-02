const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: String,
    director: String,
    producer: String,
    releaseYear: Number,
    description: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('Movie', movieSchema);