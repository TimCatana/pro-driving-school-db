const router = require("express").Router();
const inCarInstructorControllers = require("../controllers/inCarInstructor");

// router.get("/get", inCarInstructorControllers.addEntry);
router.post("/add", inCarInstructorControllers.addEntry);
router.put("/edit", inCarInstructorControllers.editEntry);
router.delete("/delete", inCarInstructorControllers.deleteEntry);

module.exports = router;
