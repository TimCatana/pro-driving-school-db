const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");

const fillStudentInCarEvaluationPdf = async () => {
  const pdfDoc = await PDFDocument.load(
    await readFile("./data/pdf/inputs/student_in_car_evaluation.pdf")
  );
  const pdfForm = pdfDoc.getForm();

  pdfForm
    .getTextField("Student_Drivers_License_Number")
    .setText("dsdq2-d23dq2d-sda");
  pdfForm.getTextField("Student_Date_Of_Birth").setText("1111-11-11");
  pdfForm.getTextField("Student_Sex").setText("Female");
  pdfForm.getTextField("Student_Height").setText("150cm");
  pdfForm.getTextField("Student_Drivers_License_Class").setText("G1");
  pdfForm
    .getTextField("Student_Last_Name_First_Name_Middle_Initial")
    .setText("Catana, Tim F");
  pdfForm.getTextField("Student_Apartment_Number").setText("243");
  pdfForm.getTextField("Student_Address").setText("243 Main Street");
  pdfForm.getTextField("Student_Apartment_Number").setText("135");
  pdfForm.getTextField("Student_Address_City").setText("Kitchener");
  pdfForm.getTextField("Student_Postal_Code").setText("N2N2N2");
  pdfForm.getTextField("Student_Phone_Number").setText("123-456-7890");

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

  const pdfBytes = await pdfDoc.save();

  await writeFile(
    "./data/pdf/outputs/student_in_car_evaluation_output.pdf",
    pdfBytes
  );
};

module.exports = fillStudentInCarEvaluationPdf;
