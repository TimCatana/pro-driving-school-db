const router = require("express").Router();
const studentControllers = require("../controllers/students");

router.get("/getAll", studentControllers.getAllEntries);
router.get("/getOne/:primary_key", studentControllers.getOneEntry);

router.get("/getFilledStudentApplicationFormPdf/:primary_key", studentControllers.getFilledStudentApplicationFormPdf);
router.get("/getFilledStudentInCarEvaluationPdf/:primary_key", studentControllers.getFilledStudentInCarEvaluationPdf);
router.get("/getFilledStudentInCarRecordPdf/:primary_key", studentControllers.getFilledStudentInCarRecordPdf);
router.get("/getFilledStudentInvoicePdf/:primary_key", studentControllers.getFilledStudentInvoicePdf);
router.get("/getFilledStudentRecordPdf/:primary_key", studentControllers.getFilledStudentRecordPdf);

router.post("/add", studentControllers.addOneEntry);
router.put("/edit/:primary_key", studentControllers.editOneEntry);
router.delete("/delete/:primary_key", studentControllers.deleteOneEntry);

module.exports = router;
