const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");
const { studentTableHeadings, inClassInstTableHeadings } = require("../../../../constants/dbConstants");

const fillStudentRecordPdf = async (studentObject, inClassInstObject) => {
  const pdfDoc = await PDFDocument.load(await readFile("./data/pdf/inputs/student_record.pdf"));
  const pdfForm = pdfDoc.getForm();

  pdfForm
    .getTextField("Student_Name")
    .setText(
      `${studentObject[studentTableHeadings.firstName]} ${studentObject[studentTableHeadings.middleName]} ${
        studentObject[studentTableHeadings.lastName]
      }`
    );
  pdfForm.getTextField("Student_Drivers_License_Num").setText(studentObject[studentTableHeadings.driversLicenseId]);
  pdfForm.getTextField("Student_Address").setText(studentObject[studentTableHeadings.address]);
  pdfForm.getTextField("Student_Cell_Num").setText(studentObject[studentTableHeadings.cellPhoneNumber]);
  pdfForm
    .getTextField("Instructor_Name")
    .setText(
      `${inClassInstObject[inClassInstTableHeadings.firstName]} ${inClassInstObject[inClassInstTableHeadings.lastName]}`
    );
  pdfForm.getTextField("Instructor_Permit_Num").setText(inClassInstObject[inClassInstTableHeadings.driversLicenseId]);
  pdfForm
    .getTextField("Instructor_Permit_Exp_Date")
    .setText(inClassInstObject[inClassInstTableHeadings.driversLicenseExpDate]);

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

  const pdfBytes = await pdfDoc.save();

  await writeFile("./data/pdf/outputs/student_record_output.pdf", pdfBytes);
};

module.exports = fillStudentRecordPdf;
