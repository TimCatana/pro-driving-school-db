const router = require("express").Router();
const inClassInstructorControllers = require("../controllers/inClassInstructor");

// router.get("/get", productControllers.addEntry);
router.post("/add", inClassInstructorControllers.addEntry);
router.put("/edit", inClassInstructorControllers.editEntry);
router.delete("/delete", inClassInstructorControllers.deleteEntry);

module.exports = router;
