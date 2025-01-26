
const mongoose = require('mongoose');
require('dotenv').config(); 

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((error) => console.error('MongoDB connection error:', error));


const perfumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  short_dir: { type: String, required: true },
  long_dir: { type: String, required: true },
  price: { type: Number, required: true },
  piecesAvailable: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  comment: [{ type: String }],
  Image: { type: String },
});

// Export the model
module.exports = mongoose.model('Perfume', perfumeSchema);
