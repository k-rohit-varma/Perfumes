const express = require("express");
const productRoutes = require("./routes/productsRouter"); // Adjust the path as needed
const cors = require('cors')
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));


app.use("/products", productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
