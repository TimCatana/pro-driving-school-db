const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");
const { studentTableHeadings } = require("../../../../constants/dbConstants");

const fillStudentApplicationFormPdf = async (studentObject) => {
  const pdfDoc = await PDFDocument.load(await readFile("./data/pdf/inputs/student_application_form.pdf"));
  const pdfForm = pdfDoc.getForm();

  pdfForm
    .getTextField("First_Name")
    .setText(`${studentObject[studentTableHeadings.firstName]} ${studentObject[studentTableHeadings.middleName]}`);
  pdfForm.getTextField("Last_Name").setText(studentObject[studentTableHeadings.lastName]);
  pdfForm.getTextField("Date_Of_Birth").setText(studentObject[studentTableHeadings.dateOfBirth]);

  // ismale ? :
  if (studentObject[studentTableHeadings.gender] == "Male") {
    pdfForm.getCheckBox("Male_CB").check();
  } else if (studentObject[studentTableHeadings.gender] == "Female") {
    pdfForm.getCheckBox("Female_CB").check();
  }

  pdfForm.getTextField("Home_Phone_Number").setText(studentObject[studentTableHeadings.homePhoneNumber]);
  pdfForm.getTextField("Cell_Phone_Number").setText(studentObject[studentTableHeadings.cellPhoneNumber]);
  pdfForm.getTextField("Address").setText(studentObject[studentTableHeadings.address]);
  pdfForm.getTextField("Apartment").setText(studentObject[studentTableHeadings.addressAptNum]);
  pdfForm.getTextField("City").setText(studentObject[studentTableHeadings.addressCity]);
  pdfForm.getTextField("Province").setText("ON");
  pdfForm.getTextField("Postal_Code").setText(studentObject[studentTableHeadings.addressPostalCode]);
  pdfForm.getTextField("Drivers_License_Number").setText(studentObject[studentTableHeadings.driversLicenseId]);
  pdfForm.getTextField("License_Issued_Date").setText(studentObject[studentTableHeadings.driversLicenseIssuedDate]);
  pdfForm.getTextField("License_Class").setText(studentObject[studentTableHeadings.driversLicenseClass]);
  pdfForm.getTextField("License_Exp_Date").setText(studentObject[studentTableHeadings.driversLicenseExpDate]);

  const pdfBytes = await pdfDoc.save();

  await writeFile("./data/pdf/outputs/student_application_form_output.pdf", pdfBytes);
};

module.exports = fillStudentApplicationFormPdf;
