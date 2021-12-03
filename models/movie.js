const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: String,
    director: String,
    producer: String,
    releaseYear: Number,
    description: String,
    review: {type: Schema.Types.ObjectId, ref: 'Review'},
}, {
    timestamps:true
});

module.exports = mongoose.model('Movie', movieSchema);