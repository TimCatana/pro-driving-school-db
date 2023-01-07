const { PDFDocument } = require(`pdf-lib`);
const { readFile, writeFile } = require(`fs/promises`);
const { studentTableHeadings } = require("../../../../constants/dbConstants");
const fs = require("fs");

const fillCourseEnrollmentPdf = async (studentObject) => {
  // if no students enrolled in course, then just present an empty page
  if (studentObject.length == 0) {
    const pdfDoc = await PDFDocument.load(
      await readFile(`${process.env.REACT_APP_PDF_INPUT_FOLDER}/course_enrollment.pdf`)
    );
    const pdfBytes = await pdfDoc.save();
    await writeFile(
      `${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/course-enrollment-forms/course_enrollment_output_0.pdf`,
      pdfBytes
    );
  } else {
    let student = 0;
    const pages = Math.ceil(studentObject.length / 10);

    // else {
    for (i = 0; i < pages; i++) {
      const pdfDoc = await PDFDocument.load(
        await readFile(`${process.env.REACT_APP_PDF_INPUT_FOLDER}/course_enrollment.pdf`)
      );
      const pdfForm = pdfDoc.getForm();

      if (i + 1 == pages) {
        maxLines = studentObject.length % 10;
      } else {
        maxLines = 10;
      }

      for (j = 0; j < maxLines; j++) {
        lineNumber = j + 1;

        pdfForm.getTextField(`Line_${lineNumber}_Number`).setText(`${lineNumber + i * 10}`);

        pdfForm
          .getTextField(`Line_${lineNumber}_LAST_NAME_First_Name_Middle_Initial`)
          .setText(
            `${studentObject[student][studentTableHeadings.lastName].toUpperCase()}, ${
              studentObject[student][studentTableHeadings.firstName]
            } ${studentObject[student][studentTableHeadings.middleName]}`
          );

        if (studentObject[student][studentTableHeadings.addressAptNum] == "") {
          pdfForm
            .getTextField(`Line_${lineNumber}_Apartment_Num_Address`)
            .setText(studentObject[student][studentTableHeadings.address]);
        } else {
          pdfForm
            .getTextField(`Line_${lineNumber}_Apartment_Num_Address`)
            .setText(
              `${studentObject[student][studentTableHeadings.addressAptNum]} - ${
                studentObject[student][studentTableHeadings.address]
              }`
            );
        }

        pdfForm
          .getTextField(`Line_${lineNumber}_City_Province_Postal_Code`)
          .setText(
            `${studentObject[student][studentTableHeadings.address]}, ${
              studentObject[student][studentTableHeadings.addressState]
            } ${studentObject[student][studentTableHeadings.addressPostalCode]}`
          );
        pdfForm
          .getTextField(`Line_${lineNumber}_Date_Of_Birth`)
          .setText(studentObject[student][studentTableHeadings.dateOfBirth]);
        pdfForm.getTextField(`Line_${lineNumber}_Sex`).setText(studentObject[student][studentTableHeadings.gender]);

        pdfForm
          .getTextField(`Line_${lineNumber}_Phone_Num`)
          .setText(studentObject[student][studentTableHeadings.cellPhoneNumber]);

        if (studentObject[student][studentTableHeadings.driversLicenseId] != "") {
          pdfForm
            .getTextField(`Line_${lineNumber}_License_Number_And_Class`)
            .setText(
              `${studentObject[student][studentTableHeadings.driversLicenseId]}, ${
                studentObject[student][studentTableHeadings.driversLicenseClass]
              }`
            );

          pdfForm
            .getTextField(`Line_${lineNumber}_License_Issued_Date_And_Exp_Date`)
            .setText(
              `${studentObject[student][studentTableHeadings.driversLicenseIssuedDate]}, ${
                studentObject[student][studentTableHeadings.driversLicenseExpDate]
              }`
            );
        }

        // pdfForm.getTextField(`Line_${lineNumber}_Start_Of_Training`).setText('');

        student++;
      }

      const pdfBytes = await pdfDoc.save();
      await writeFile(
        `${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/course-enrollment-forms/course_enrollment_output_${i}.pdf`,
        pdfBytes
      );
    }

    // MERGE ALL FILES INTO ONE FILE
    // MAYBE PUT THIS IN ITS OWN FILE LATER
    const mergedPdf = await PDFDocument.create();

    const filesToMerge = await fs.promises.readdir(
      `${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/course-enrollment-forms`
    );
    for (const file of filesToMerge) {
      if (file != "README.txt") {
        const pdf = await PDFDocument.load(
          fs.readFileSync(`${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/course-enrollment-forms/${file}`)
        );

        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }
    }

    const mergedPdfBytes = await mergedPdf.save();
    await writeFile(
      `${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/course-enrollment-forms/merged_course_enrollment_output.pdf`,
      mergedPdfBytes
    );
  }

  // }

  // const pdfFields = pdfDoc
  //   .getForm()
  //   .getFields()
  //   .map((f) => f.getName());

  // console.log({ pdfFields });
};

module.exports = fillCourseEnrollmentPdf;
