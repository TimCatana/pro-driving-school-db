const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");

const fillStudentRecordPdf = async () => {
  const pdfDoc = await PDFDocument.load(
    await readFile("./data/pdf/inputs/student_record.pdf")
  );
  const pdfForm = pdfDoc.getForm();

  pdfForm.getTextField("Student_Name").setText("Tim Catana");
  pdfForm.getTextField("Student_Drivers_License_Num").setText("abc-123-456");
  pdfForm.getTextField("Student_Address").setText("243 Red Clover Court");
  pdfForm.getTextField("Student_Cell_Num").setText("2268087962");
  pdfForm.getTextField("Instructor_Name").setText("Joe Biden");
  pdfForm.getTextField("Instructor_Permit_Num").setText("fsdd-sdfsf-wfse-");
  pdfForm.getTextField("Instructor_Permit_Exp_Date").setText("2023/01/12");

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

  const pdfBytes = await pdfDoc.save();

  await writeFile("./data/pdf/outputs/student_record_output.pdf", pdfBytes);
};

module.exports = fillStudentRecordPdf;
