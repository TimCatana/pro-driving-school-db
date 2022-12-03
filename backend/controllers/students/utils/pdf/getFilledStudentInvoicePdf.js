const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");

const getFilledStudentInvoicePdf = async () => {
  const pdfDoc = await PDFDocument.load(
    await readFile("./data/pdf/inputs/student_invoice.pdf")
  );
  const pdfForm = pdfDoc.getForm();

  // pdfForm.getTextField("Student_Name").setText("Tim Catana");
  // pdfForm.getTextField("Student_Address").setText("243 Red Clover Crt");
  // pdfForm.getTextField("Student_Day_Time_Phone_Num").setText("2268087962");
  // pdfForm.getTextField("Student_Evening_Time_Phone_Num").setText("2268087962");
  // pdfForm.getTextField("Student_Evening_Time_Phone_Num").setText("2268087962");
  // pdfForm.getTextField("Student_Balance").setText("95.00");
  // pdfForm.getTextField("Student_Course").setText("1001");
  // pdfForm.getTextField("Student_Date_Of_Birth").setText("2001-11-11");
  // pdfForm
  //   .getTextField("Student_Drivers_License_Num")
  //   .setText("dsfdf-fw3f-sfw3f3fw-fw3ff");
  // pdfForm
  //   .getTextField("Student_Drivers_License_Issued_Date")
  //   .setText("2001-11-11");
  // pdfForm
  //   .getTextField("Student_Drivers_License_Exp_Date")
  //   .setText("2001-11-11");

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

  const pdfBytes = await pdfDoc.save();

  await writeFile("./data/pdf/outputs/student_invoice_output.pdf", pdfBytes);
};

module.exports = getFilledStudentInvoicePdf;
