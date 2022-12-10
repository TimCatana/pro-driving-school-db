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

  const db = makeDb();

  try {
    await db.query(sql, [
      req.body.iciFirstName,
      req.body.iciLastName,
      req.body.iciDriversLicenseNum,
      req.body.iciDriversLicenseExpDate,
    ]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to add in class instructor to database -- ${e}`);
    res.sendStatus(500);
  } finally {
    await db.close();
  }
};

module.exports = addOneEntry;
