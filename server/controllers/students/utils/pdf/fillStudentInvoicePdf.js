const { PDFDocument } = require("pdf-lib");
const { readFile, writeFile } = require("fs/promises");
const { studentTableHeadings, productTableHeadings } = require("../../../../constants/dbConstants");

const fillStudentInvoicePdf = async (studentObject, productObject, invoice_id) => {
  const pdfDoc = await PDFDocument.load(await readFile(`${process.env.REACT_APP_PDF_INPUT_FOLDER}/student_invoice.pdf`));
  const pdfForm = pdfDoc.getForm();

  pdfForm.getTextField("Invoice_Number").setText(`${invoice_id}`);

  pdfForm.getTextField("Invoice_Date").setText(new Date().toISOString().split("T")[0]); // today's date in yyyy-mm-dd

  pdfForm
    .getTextField("Student_First_Name_Last_Name")
    .setText(
      `${studentObject[studentTableHeadings.firstName]} ${studentObject[studentTableHeadings.middleName]} ${
        studentObject[studentTableHeadings.lastName]
      }`
    );
  pdfForm.getTextField("Student_Address").setText(studentObject[studentTableHeadings.address]);

  pdfForm
    .getTextField("Student_City_Province_Postal_Code")
    .setText(
      `${studentObject[studentTableHeadings.addressCity]}, ${studentObject[studentTableHeadings.addressState]}, ${
        studentObject[studentTableHeadings.addressPostalCode]
      }`
    );
  pdfForm
    .getTextField("Billing_First_Name_Last_Name")
    .setText(
      `${studentObject[studentTableHeadings.firstName]} ${studentObject[studentTableHeadings.middleName]} ${
        studentObject[studentTableHeadings.lastName]
      }`
    );
  pdfForm.getTextField("Billing_Address").setText(studentObject[studentTableHeadings.address]);
  pdfForm
    .getTextField("Billing_City_Province_Postal_Code")
    .setText(
      `${studentObject[studentTableHeadings.addressCity]}, ${studentObject[studentTableHeadings.addressState]}, ${
        studentObject[studentTableHeadings.addressPostalCode]
      }`
    );

  // TODO - for loop adding products
  pdfForm.getTextField("Line_1_Quantity").setText("1");
  pdfForm.getTextField("Line_1_Description").setText(productObject[productTableHeadings.name]);
  pdfForm.getTextField("Line_1_Unit_Price").setText(`${productObject[productTableHeadings.price]}`);
  pdfForm.getTextField("Line_1_Discount").setText("-  ");
  pdfForm.getTextField("Line_1_Total_Price").setText(`${productObject[productTableHeadings.price]}`);

  pdfForm.getTextField("Subtotal").setText(`${productObject[productTableHeadings.price]}`);
  pdfForm.getTextField("Tax").setText(`${(productObject[productTableHeadings.price] * 0.13).toFixed(2)}`);
  pdfForm.getTextField("Total").setText(`${(productObject[productTableHeadings.price] * 1.13).toFixed(2)} `);

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });

  const pdfBytes = await pdfDoc.save();

  await writeFile(`${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/student_invoice_output.pdf`, pdfBytes);
};

module.exports = fillStudentInvoicePdf;
