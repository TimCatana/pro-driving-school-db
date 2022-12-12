const { studentTableHeadings } = require("../../constants/dbConstants");
const fillStudentInCarEvaluationPdf = require("./utils/pdf/fillStudentInCarEvaluationPdf");
const makeDb = require("../../util/makeDb");
const open = require("open");
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentInCarEvaluationPdf = async (req, res) => {
  const sql = `
  SELECT 
    * 
  FROM 
    ${studentTableHeadings.tableName}  
  WHERE 
    ${studentTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    const result = await db.query(sql, [req.params.primary_key]);
    await fillStudentInCarEvaluationPdf(result[0]);
    await open(`./data/pdf/outputs/student_in_car_evaluation_output.pdf`);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to get student in car evaluation form pdf -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = getFilledStudentInCarEvaluationPdf;
