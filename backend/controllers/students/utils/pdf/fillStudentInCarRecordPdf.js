const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");
const { studentTableHeadings, productTableHeadings } = require("../../../../constants/dbConstants");

const fillStudentInCarRecordPdf = async (studentObject, productObject) => {
  const pdfDoc = await PDFDocument.load(await readFile("./data/pdf/inputs/student_in_car_record.pdf"));
  const pdfForm = pdfDoc.getForm();

  console.log("aaaaaaaaaaaaa");

  pdfForm
    .getTextField("Student_Name")
    .setText(
      `${studentObject[studentTableHeadings.firstName]} ${studentObject[studentTableHeadings.middleName]} ${
        studentObject[studentTableHeadings.lastName]
      }`
    );
  pdfForm.getTextField("Student_Address").setText(studentObject[studentTableHeadings.address]);
  pdfForm.getTextField("Student_Day_Time_Phone_Num").setText(studentObject[studentTableHeadings.cellPhoneNumber]);
  pdfForm.getTextField("Student_Evening_Time_Phone_Num").setText(studentObject[studentTableHeadings.cellPhoneNumber]);
  // pdfForm.getTextField("Student_Balance").setText(`${productObject[productTableHeadings.price]}`);
  pdfForm.getTextField("Student_Course").setText(`${studentObject[studentTableHeadings.registeredCourse]}`);
  pdfForm.getTextField("Student_Date_Of_Birth").setText(studentObject[studentTableHeadings.dateOfBirth]);
  pdfForm.getTextField("Student_Drivers_License_Num").setText(studentObject[studentTableHeadings.driversLicenseId]);
  pdfForm
    .getTextField("Student_Drivers_License_Issued_Date")
    .setText(studentObject[studentTableHeadings.driversLicenseIssuedDate]);
  pdfForm
    .getTextField("Student_Drivers_License_Exp_Date")
    .setText(studentObject[studentTableHeadings.driversLicenseExpDate]);

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

  const pdfBytes = await pdfDoc.save();

  await writeFile("./data/pdf/outputs/student_in_car_record_output.pdf", pdfBytes);
};

module.exports = fillStudentInCarRecordPdf;
