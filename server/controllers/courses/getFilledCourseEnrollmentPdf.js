const fillCourseEnrollmentPdf = require("./utils/pdf/fillCourseEnrollmentPdf");
const makeDb = require("../../util/makeDb");
const open = require("open");
const { studentTableHeadings, courseTableHeadings } = require("../../constants/dbConstants");
const fs = require("fs");
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledCourseEnrollmentPdf = async (req, res) => {
  const courseSql = `
    SELECT 
      *   
    FROM 
      ${courseTableHeadings.tableName}  
    WHERE 
      ${studentTableHeadings.id} = ?;`;

  const studentSql = `
    SELECT 
      *   
    FROM 
      ${studentTableHeadings.tableName}  
    WHERE 
      ${studentTableHeadings.registeredCourse} = ?;`;

  const db = makeDb();

  try {
    const courseResult = await db.query(courseSql, [req.params.primary_key]);
    const studentResult = await db.query(studentSql, [courseResult[0][courseTableHeadings.courseId]]);

    // DELETE OLD FILES
    const oldFiles = await fs.promises.readdir(`${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/course-enrollment-forms`);
    for (const file of oldFiles) {
      if (file != "README.txt") {
        await fs.promises.unlink(`${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/course-enrollment-forms/${file}`);
      }
    }

    // GET FILLED FORM
    await fillCourseEnrollmentPdf(studentResult);

    await open(
      `${process.env.REACT_APP_PDF_OUTPUT_FOLDER}/course-enrollment-forms/merged_course_enrollment_output.pdf`
    );

    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to get course enrollment form pdf -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = getFilledCourseEnrollmentPdf;
