const router = require("express").Router();
const productControllers = require("../controllers/product");

// router.get("/get", productControllers.addEntry); 
router.post("/add", productControllers.addEntry);
router.put("/edit", productControllers.editEntry);
router.delete("/delete", productControllers.deleteEntry);

module.exports = router;
