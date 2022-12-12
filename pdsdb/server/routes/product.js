const router = require("express").Router();
const productControllers = require("../controllers/products");

router.get("/getAll", productControllers.getAllEntries);
router.get("/getOne/:primary_key", productControllers.getOneEntry);
router.post("/add", productControllers.addOneEntry);
router.put("/edit/:primary_key", productControllers.editOneEntry);
router.delete("/delete/:primary_key", productControllers.deleteOneEntry);

module.exports = router;
