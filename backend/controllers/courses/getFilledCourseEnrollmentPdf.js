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

    const oldFiles = await fs.promises.readdir(`./data/pdf/outputs/course-enrollment-forms`);
    for (const file of oldFiles) {
      if (file != "README.txt") {
        await fs.promises.unlink(`./data/pdf/outputs/course-enrollment-forms/${file}`);
      }
    }

    await fillCourseEnrollmentPdf(studentResult);

    const newFiles = await fs.promises.readdir(`./data/pdf/outputs/course-enrollment-forms`);
    for (const file of newFiles) {
      if (file != "README.txt") {
        await open(`./data/pdf/outputs/course-enrollment-forms/${file}`);
      }
    }

    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to get course enrollment form pdf -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = getFilledCourseEnrollmentPdf;
