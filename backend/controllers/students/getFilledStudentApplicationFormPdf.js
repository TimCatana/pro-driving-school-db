const { studentTableHeadings } = require("../../constants/dbConstants");
const fillStudentApplicationFormPdf = require("./utils/pdf/FillStudentApplicationFormPdf");
const makeDb = require("../../util/makeDb");
const fs = require("fs");

const path = require("path");
const open = require("open");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFilledStudentApplicationFormPdf = async (req, res) => {
  const sql = `
  SELECT 
    * 
  FROM 
    ${studentTableHeadings.tableName}  
  WHERE 
    ${studentTableHeadings.id} = ?;`;

  const db = makeDb();

  let result;

  try {
    result = await db.query(sql, [req.params.primary_key]);
  } catch (e) {
    console.log(`ERROR - Failed to get student application form pdf -- ${e}`);
    res.send({ status: 500, query: null });
  } finally {
    await db.close();
  }

  try {
    await fillStudentApplicationFormPdf(result[0]);
  } catch (e) {
    console.log(`ERROR - Failed to get student application form pdf -- ${e}`);
    res.send({ status: 500, query: null });
  }

  open(`./data/pdf/outputs/student_application_form_output.pdf`);
  res.sendStatus(200);
};

module.exports = getFilledStudentApplicationFormPdf;
