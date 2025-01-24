const express = require("express");
const { addPerfumes } = require("../controllers/addperfume");
const { getAllPerfumes } = require("../controllers/getAllPerfumes");

const router = express.Router();

router.get("/", (req, res) => {
    res.send(`This is the products page`);
});

router.post("/addPerfume", addPerfumes);
router.get("/getPerfumes",getAllPerfumes)

module.exports = router;
