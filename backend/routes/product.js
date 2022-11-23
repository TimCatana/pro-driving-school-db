const router = require("express").Router();
const productControllers = require("../controllers/product");

router.get("/getAll", productControllers.getAllEntries);
router.get("/getOne/:primary_key", productControllers.getOneEntry);
router.post("/add", productControllers.addEntry);
router.put("/edit", productControllers.editEntry);
router.delete("/delete/:primary_key", productControllers.deleteOneEntry);

module.exports = router;
