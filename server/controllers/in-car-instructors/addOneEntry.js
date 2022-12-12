const { inCarInstTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

/**
 *
 * @param {

 * } req
 * @param {*} res
 */
const addOneEntry = async (req, res) => {
  const sql = `
  INSERT INTO 
    ${inCarInstTableHeadings.tableName} 
  (
    ${inCarInstTableHeadings.firstName}, 
    ${inCarInstTableHeadings.lastName}, 
    ${inCarInstTableHeadings.driversLicenseId}, 
    ${inCarInstTableHeadings.driversLicenseExpDate}, 
    ${inCarInstTableHeadings.gDriversLicenseId}, 
    ${inCarInstTableHeadings.gDriversLicenseExpDate}) 
  VALUES (?, ?, ?, ?, ?, ?);`;

  const db = makeDb();

  try {
    await db.query(sql, [
      req.body.iciFirstName,
      req.body.iciLastName,
      req.body.iciDriversLicenseNum,
      req.body.iciDriversLicenseExpDate,
      req.body.iciGLicenseNum,
      req.body.iciGLicenseExpDate,
    ]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to add in car instructor to database -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = addOneEntry;
