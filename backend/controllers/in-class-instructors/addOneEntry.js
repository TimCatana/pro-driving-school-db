const { inClassInstTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

/**
 *
 * @param {
 *    courseId,
 *    courseStartDate,
 *    courseEndDate,
 *    _isCourseDigital,
 *    courseCapacity,
 *    courseInClassInstructor
 * } req
 * @param {*} res
 */
const addOneEntry = async (req, res) => {
  const sql = `
  INSERT INTO 
    ${inClassInstTableHeadings.tableName} 
  (
    ${inClassInstTableHeadings.firstName}, 
    ${inClassInstTableHeadings.lastName}, 
    ${inClassInstTableHeadings.driversLicenseId}, 
    ${inClassInstTableHeadings.driversLicenseExpDate}
  ) 
  VALUES (?, ?, ?, ?);`;

  let returnVal;

  const db = makeDb();

  try {
    const rows = await db.query(sql, [
      req.body.iciFirstName,
      req.body.iciLastName,
      req.body.iciDriversLicenseNum,
      req.body.iciDriversLicenseExpDate,
    ]);

    returnVal = { status: 200, query: rows };
  } catch (e) {
    console.log(
      `ERROR - Failed to add in class instructor to database -- ${e}`
    );
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = addOneEntry;