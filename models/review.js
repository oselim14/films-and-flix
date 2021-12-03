

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    rating: {type: Number, required: true, default: 5},
    review: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps:true
});

module.exports = mongoose.model('Review', reviewSchema);