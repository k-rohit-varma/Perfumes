const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/perfumeSeller')

const perfumeSchema = mongoose.Schema({
    name: String,
    short_dir: String,
    long_dir: String,
    price: Number,
    piecesAvailable:Number,
    discount: Number,
    comment: [String],
    Image: String
});


module.exports = mongoose.model("perfume",perfumeSchema)