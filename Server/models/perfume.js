const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/perfumeSeller')

const perfumeSchema = mongoose.Schema({
    name: String,
    short_dir: String,
    long_dir: String,
    price: Number,
    piecesAvailable:Number,
    discount: Number,
    comment: [{
        type: mongoose.Schema.Types.ObjectId, // Allow multiple ObjectId references
        ref: "comments", // Reference the comments collection
        default: [] // Default to an empty array
    }],
    Image: String
});


module.exports = mongoose.model("perfume",perfumeSchema)