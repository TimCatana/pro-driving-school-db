const { PDFDocument } = require(`pdf-lib`);
const { readFile, writeFile } = require(`fs/promises`);

const fillCourseEnrollmentPdf = async () => {
  const pdfDoc = await PDFDocument.load(
    await readFile(`./data/pdf/inputs/course_enrollment.pdf`)
  );
  const pdfForm = pdfDoc.getForm();

  for (i = 0; i < 3; i++) {
    for (j = 0; j < 10; j++) {
      lineNumber = j + 1;

      pdfForm
        .getTextField(`Line_${lineNumber}_Number`)
        .setText(`${lineNumber + i * 10}`);
      pdfForm
        .getTextField(`Line_${lineNumber}_LAST_NAME_First_Name_Middle_Initial`)
        .setText(`CATANA, Tim F`);
      pdfForm
        .getTextField(`Line_${lineNumber}_Apartment_Num_Address`)
        .setText(`135 - 243 Main Street`);
      pdfForm
        .getTextField(`Line_${lineNumber}_City_Province_Postal_Code`)
        .setText(`Kitchener, ON N2E 4J5`);
      pdfForm
        .getTextField(`Line_${lineNumber}_Date_Of_Birth`)
        .setText(`1111-11-11`);
      pdfForm.getTextField(`Line_${lineNumber}_Sex`).setText(`Male`);
      pdfForm
        .getTextField(`Line_${lineNumber}_City_Province_Postal_Code`)
        .setText(`Tim Catana`);
      pdfForm
        .getTextField(`Line_${lineNumber}_Phone_Num`)
        .setText(`123-456-7890`);
      pdfForm
        .getTextField(`Line_${lineNumber}_License_Number_And_Class`)
        .setText(`asdasd-sadads-sads, G1`);
      pdfForm
        .getTextField(`Line_${lineNumber}_License_Issued_Date_And_Exp_Date`)
        .setText(`1111-11-11, 9999-99-99`);
      pdfForm
        .getTextField(`Line_${lineNumber}_Start_Of_Training`)
        .setText(`mmm`);
    }
    const pdfBytes = await pdfDoc.save();

    await writeFile(
      `./data/pdf/outputs/course-enrollment-forms/course_enrollment_output_${i}.pdf`,
      pdfBytes
    );
  }

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });
};

module.exports = fillCourseEnrollmentPdf;
