const { studentTableHeadings, courseTableHeadings, inClassInstTableHeadings } = require("../../constants/dbConstants");
const fillStudentRecordPdf = require("./utils/pdf/fillStudentRecordPdf");
const makeDb = require("../../util/makeDb");
const open = require("open");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentRecordPdf = async (req, res) => {
  const studentSql = `
    SELECT 
      * 
    FROM 
      ${studentTableHeadings.tableName}  
    WHERE 
      ${studentTableHeadings.id} = ?;`;

  const courseSql = `
    SELECT 
      * 
    FROM 
      ${courseTableHeadings.tableName}  
    WHERE 
      ${courseTableHeadings.courseId} = ?;`;

  const inClassInstSql = `
    SELECT 
      * 
    FROM 
      ${inClassInstTableHeadings.tableName}  
    WHERE 
      ${inClassInstTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    const studentResult = await db.query(studentSql, [req.params.primary_key]);
    const courseResult = await db.query(courseSql, [studentResult[0][studentTableHeadings.registeredCourse]]);
    const inClassInstResult = await db.query(inClassInstSql, [
      courseResult[0][courseTableHeadings.inClassInstructorId],
    ]);

    await fillStudentRecordPdf(studentResult[0], inClassInstResult[0]);
    await open(`./data/pdf/outputs/student_record_output.pdf`);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to get student record in form pdf -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = getFilledStudentRecordPdf;
