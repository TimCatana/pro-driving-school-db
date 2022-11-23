const router = require("express").Router();
const studentControllers = require("../controllers/student");

router.get("/getAll", studentControllers.getAllEntries);
router.get("/getOne/:primary_key", studentControllers.getOneEntry);
router.post("/add", studentControllers.addEntry);
router.put("/edit/:primary_key", studentControllers.editOneEntry);
router.delete("/delete/:primary_key", studentControllers.deleteOneEntry);

module.exports = router;
