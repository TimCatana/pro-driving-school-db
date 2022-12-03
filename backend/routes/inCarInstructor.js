const router = require("express").Router();
const inCarInstructorControllers = require("../controllers/in-car-instructors");


router.get("/getAll", inCarInstructorControllers.getAllEntries);
router.get("/getOne/:primary_key", inCarInstructorControllers.getOneEntry);
router.post("/add", inCarInstructorControllers.addOneEntry);
router.put("/edit/:primary_key", inCarInstructorControllers.editOneEntry);
router.delete("/delete/:primary_key", inCarInstructorControllers.deleteOneEntry);

module.exports = router;
