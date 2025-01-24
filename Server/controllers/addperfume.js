const perfume = require("../models/perfume"); 

module.exports.addPerfumes = async (req, res) => {
    try {
        const { name, short_dir, long_dir, price, discount, Image,piecesAvailable } = req.body; // Extract data from request body

        // Create a new perfume instance
        const newPerfume = await perfume.create({
            name,
            short_dir,
            long_dir,
            price,
            discount,
            piecesAvailable,
            comment: [], // Initialize as an empty array
            Image
        });

        
        res.status(201).send(newPerfume);
    } catch (err) {
        console.error(err);
        res.status(500).send("An Unexpected Error Occurred");
    }
};
