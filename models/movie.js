const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    rating: {type: Number, required: true, default: 5},
    review: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps:true
});

const movieSchema = new Schema ({
    title: String,
    director: String,
    writer: String,
    releaseYear: Number,
    description: String,
    IMDBid: String,
    reviews: [reviewSchema],
}, {
    timestamps:true
});

movieSchema.statics.getMovie = function(IMDBid) {
    return this.findOne({IMDBid: IMDBid});
}

module.exports = mongoose.model('Movie', movieSchema);