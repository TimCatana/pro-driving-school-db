const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");

const fillStudentInvoicePdf = async () => {
  const pdfDoc = await PDFDocument.load(
    await readFile("./data/pdf/inputs/student_invoice.pdf")
  );
  const pdfForm = pdfDoc.getForm();

  pdfForm.getTextField("Invoice_Number").setText("000000");

  pdfForm
    .getTextField("Invoice_Date")
    .setText(new Date().toISOString().split("T")[0]); // today's date in yyyy-mm-dd

  pdfForm.getTextField("Student_First_Name_Last_Name").setText("Tim Catana");
  pdfForm.getTextField("Student_Address").setText("243 Main Street");
  pdfForm
    .getTextField("Student_City_Province_Postal_Code")
    .setText("Kitchener, ON, N2N2N2");
  pdfForm.getTextField("Billing_First_Name_Last_Name").setText("Tim Catana");
  pdfForm.getTextField("Billing_Address").setText("243 Main Street");
  pdfForm
    .getTextField("Billing_City_Province_Postal_Code")
    .setText("Kitchener, ON, N2N2N2");

  // TODO - for loop adding products
  pdfForm.getTextField("Line_1_Quantity").setText("1");
  pdfForm.getTextField("Line_1_Description").setText("irtem 1 description");
  pdfForm.getTextField("Line_1_Unit_Price").setText("$10.00");
  pdfForm.getTextField("Line_1_Discount").setText("-  ");
  pdfForm.getTextField("Line_1_Total_Price").setText("$10.00");

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

  const pdfBytes = await pdfDoc.save();

  await writeFile("./data/pdf/outputs/student_invoice_output.pdf", pdfBytes);
};

module.exports = fillStudentInvoicePdf;
