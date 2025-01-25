const express = require("express");
const { addPerfumes } = require("../controllers/addperfume");
const { getAllPerfumes } = require("../controllers/getAllPerfumes");
const { comment , getAllComments } = require("../controllers/comment");

const router = express.Router();

router.get("/", (req, res) => {
    res.send(`This is the products page`);
});

router.post("/addPerfume", addPerfumes);
router.get("/getPerfumes",getAllPerfumes)
router.post("/comments",comment)
router.get("/:id/getAllComments", getAllComments)

module.exports = router;
