const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");
const {
  studentTableHeadings,
  productTableHeadings,
  inCarInstTableHeadings,
} = require("../../../../constants/dbConstants");

const fillStudentInCarRecordPdf = async (studentObject, productObject, inCarInstObject) => {
  const pdfDoc = await PDFDocument.load(
    await readFile(`${process.env.REACT_APP_PDF_INPUT_FOLDER}/student_in_car_record.pdf`)
  );
  const pdfForm = pdfDoc.getForm();

  pdfForm
    .getTextField("Student_Name")
    .setText(
      `${studentObject[studentTableHeadings.firstName]} ${studentObject[studentTableHeadings.middleName]} ${
        studentObject[studentTableHeadings.lastName]
      }`
    );
  pdfForm.getTextField("Student_Address").setText(`${studentObject[studentTableHeadings.address]} ${studentObject[studentTableHeadings.addressCity]}`);
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

  if (inCarInstObject) {
    pdfForm
      .getTextField("In_Car_Inst")
      .setText(
        `${inCarInstObject[inCarInstTableHeadings.firstName]} ${inCarInstObject[inCarInstTableHeadings.lastName]}`
      );
    pdfForm
      .getTextField("In_Car_Inst_Instructor_Drivers_License_Number")
      .setText(inCarInstObject[inCarInstTableHeadings.driversLicenseId]);
    pdfForm
      .getTextField("In_Car_Inst_Drivers_License_Exp_Date")
      .setText(inCarInstObject[inCarInstTableHeadings.driversLicenseExpDate]);
    pdfForm.getTextField("In_Car_Inst_G_License").setText(inCarInstObject[inCarInstTableHeadings.gDriversLicenseId]);
    pdfForm
      .getTextField("In_Car_Inst_G_License_Exp_Date")
      .setText(inCarInstObject[inCarInstTableHeadings.gDriversLicenseExpDate]);
  }

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

  const pdfBytes = await pdfDoc.save();

  await writeFile(`${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/student_in_car_record_output.pdf`, pdfBytes);
};

module.exports = fillStudentInCarRecordPdf;
