const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");

const fillStudentApplicationFormPdf = async () => {
  const pdfDoc = await PDFDocument.load(
    await readFile("./data/pdf/inputs/student_application_form.pdf")
  );
  const pdfForm = pdfDoc.getForm();

  pdfForm.getTextField("First_Name").setText("Tim");
  pdfForm.getTextField("Last_Name").setText("Catana");
  pdfForm.getTextField("Date_Of_Birth").setText("1234-56-78");

  // ismale ? :
  pdfForm.getCheckBox("Male_CB").check();

  pdfForm.getTextField("Home_Phone_Number").setText("123-456-7890");
  pdfForm.getTextField("Cell_Phone_Number").setText("098-765-4321");
  pdfForm.getTextField("Address").setText("243 Main Street");
  pdfForm.getTextField("Apartment").setText("135");
  pdfForm.getTextField("City").setText("Kitchener");
  pdfForm.getTextField("Province").setText("ON");
  pdfForm.getTextField("Postal_Code").setText("N2N2N2");
  pdfForm.getTextField("Drivers_License_Number").setText("asdsd-q2qddq-dasd");
  pdfForm.getTextField("License_Issued_Date").setText("1111-11-11");
  pdfForm.getTextField("License_Class").setText("G1");
  pdfForm.getTextField("License_Exp_Date").setText("5555-55-55");

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

  const pdfBytes = await pdfDoc.save();

  await writeFile(
    "./data/pdf/outputs/student_application_form_output.pdf",
    pdfBytes
  );
};

module.exports = fillStudentApplicationFormPdf;
