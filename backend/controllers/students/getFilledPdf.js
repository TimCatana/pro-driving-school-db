
// exports.getFilledPdf = async (req, res) => {
//   console.log("Stub - getting filled pdf");

//   try {
//     const pdfDoc = await PDFDocument.load(
//       await readFile("./data/pdf/inputs/student_record.pdf")
//     );
//     const pdfForm = pdfDoc.getForm();

//     pdfForm.getTextField("Student_Name").setText("Tim Catana");
//     pdfForm.getTextField("Student_Drivers_License_Num").setText("abc-123-456");
//     pdfForm.getTextField("Student_Address").setText("243 Red Clover Court");
//     pdfForm.getTextField("Student_Cell_Num").setText("2268087962");
//     pdfForm.getTextField("Instructor_Name").setText("Joe Biden");
//     pdfForm.getTextField("Instructor_Permit_Num").setText("fsdd-sdfsf-wfse-");
//     pdfForm.getTextField("Instructor_Permit_Exp_Date").setText("2023/01/12");

//     // const pdfFields = pdfDoc
//     //   .getForm()
//     //   .getFields()
//     //   .map((f) => f.getName());

//     // console.log({ pdfFields });

//     const pdfBytes = await pdfDoc.save();

//     await writeFile("./data/outputs/lol.pdf", pdfBytes);
//   } catch (e) {
//     console.log(e);
//   }
// };
