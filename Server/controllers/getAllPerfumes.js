const Perfume = require("../models/perfume"); // Import the perfume model

module.exports.getAllPerfumes = async (req, res) => {
    try {
        const perfumes = await Perfume.find(); // Retrieve all perfumes from the database
        res.status(200).json(perfumes); // Send the data as a JSON response
    } catch (err) {
        console.error(err);
        res.status(500).send("An Unexpected Error Occurred");
    }
};
