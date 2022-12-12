const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");
const { studentTableHeadings } = require("../../../../constants/dbConstants");

const fillStudentInCarEvaluationPdf = async (studentObject) => {
  const pdfDoc = await PDFDocument.load(await readFile("./data/pdf/inputs/student_in_car_evaluation.pdf"));
  const pdfForm = pdfDoc.getForm();

  pdfForm.getTextField("Student_Drivers_License_Number").setText(studentObject[studentTableHeadings.driversLicenseId]);
  pdfForm.getTextField("Student_Date_Of_Birth").setText(studentObject[studentTableHeadings.dateOfBirth]);
  pdfForm.getTextField("Student_Sex").setText(studentObject[studentTableHeadings.gender]);
  pdfForm.getTextField("Student_Height").setText(studentObject[studentTableHeadings.height]);
  pdfForm
    .getTextField("Student_Drivers_License_Class")
    .setText(studentObject[studentTableHeadings.driversLicenseClass]);
  pdfForm
    .getTextField("Student_Last_Name_First_Name_Middle_Initial")
    .setText(
      `${studentObject[studentTableHeadings.lastName]}, ${studentObject[studentTableHeadings.firstName]} ${
        studentObject[studentTableHeadings.middleName]
      }`
    );
  pdfForm.getTextField("Student_Address").setText(studentObject[studentTableHeadings.address]);
  pdfForm.getTextField("Student_Apartment_Number").setText(studentObject[studentTableHeadings.addressAptNum]);
  pdfForm.getTextField("Student_Address_City").setText(studentObject[studentTableHeadings.addressCity]);
  pdfForm.getTextField("Student_Postal_Code").setText(studentObject[studentTableHeadings.addressPostalCode]);
  pdfForm.getTextField("Student_Phone_Number").setText(studentObject[studentTableHeadings.cellPhoneNumber]);

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

  const pdfBytes = await pdfDoc.save();

  await writeFile("./data/pdf/outputs/student_in_car_evaluation_output.pdf", pdfBytes);
};

module.exports = fillStudentInCarEvaluationPdf;
