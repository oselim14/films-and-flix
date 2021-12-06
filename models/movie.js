const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    rating: {type: Number, required: true, default: 5},
    review: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: {type: String}
}, {
    timestamps:true
});

const movieSchema = new Schema ({
    title: String,
    directors: {type: String},
    writers: {type: String},
    stars: {type: String},
    image: String,
    releaseYear: Number,
    description: String,
    IMDBid: {type: String, required: true},
    reviews: [reviewSchema],
}, {
    timestamps:true
});

movieSchema.statics.getMovie = function(IMDBid) {
    return this.findOne({IMDBid: IMDBid});
}

module.exports = mongoose.model('Movie', movieSchema);