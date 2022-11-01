const router = require("express").Router();
const productControllers = require("../controllers/products");

router.get("/add", productControllers.addEntry); // make this post
router.get("/edit", productControllers.editEntry);
router.get("/delete", productControllers.deleteEntry);

module.exports = router;
