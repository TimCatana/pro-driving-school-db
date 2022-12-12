const { studentTableHeadings, productTableHeadings } = require("../../constants/dbConstants");
const fillStudentInCarRecordPdf = require("./utils/pdf/fillStudentInCarRecordPdf");
const makeDb = require("../../util/makeDb");
const open = require("open");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentInCarRecordPdf = async (req, res) => {
  const studentSql = `
    SELECT 
      * 
    FROM 
      ${studentTableHeadings.tableName}  
    WHERE 
      ${studentTableHeadings.id} = ?;`;

  const productSql = `
    SELECT 
      * 
    FROM 
      ${productTableHeadings.tableName}  
    WHERE 
      ${productTableHeadings.productId} = ?;`;

  const db = makeDb();

  try {
    const studentResult = await db.query(studentSql, [req.params.primary_key]);
    const productResult = await db.query(productSql, [studentResult[0][studentTableHeadings.purchasedProduct]]);

    await fillStudentInCarRecordPdf(studentResult[0], productResult[0]);
    await open(`./data/pdf/outputs/student_in_car_record_output.pdf`);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to get student in car record form pdf -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = getFilledStudentInCarRecordPdf;
