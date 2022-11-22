const router = require("express").Router();
const studentControllers = require("../controllers/student");

// router.get("/get", studentControllers.addEntry);
router.post("/add", studentControllers.addEntry);
router.put("/edit", studentControllers.editEntry);
router.delete("/delete", studentControllers.deleteEntry);

module.exports = router;
