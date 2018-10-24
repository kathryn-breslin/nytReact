const router = require("express").Router();
const path = require("path");
const articleController = require("../controllers/articleController");

router.get("/api/articles", articleController.find)
router.post("/api/articles", articleController.insert);
// router.put("/api/articles/:id", articleController.update)
router.delete("/api/articles/:id", articleController.delete)
// router.get("/api/articles/:id", articleController.findById);


router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
    