const { inCarInstTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

const editOneEntry = async (req, res) => {
  const sql = `
  UPDATE 
    ${inCarInstTableHeadings.tableName} 
  SET 
    ${inCarInstTableHeadings.firstName} = ?, 
    ${inCarInstTableHeadings.lastName} = ?, 
    ${inCarInstTableHeadings.driversLicenseId} = ?, 
    ${inCarInstTableHeadings.driversLicenseExpDate} = ?, 
    ${inCarInstTableHeadings.driversLicenseId} = ?, 
    ${inCarInstTableHeadings.gDriversLicenseExpDate} = ?
  WHERE 
    ${inCarInstTableHeadings.id} = ?;`;

  let returnVal;

  const db = makeDb();

  try {
    const rows = await db.query(sql, [
      req.body.iciFirstName,
      req.body.iciLastName,
      req.body.iciDriversLicenseNum,
      req.body.iciDriversLicenseExpDate,
      req.body.iciGLicenseNum,
      req.body.iciGLicenseExpDate,
      req.params.primary_key,
    ]);

    returnVal = { status: 200, query: rows };
  } catch (e) {
    console.log(
      `ERROR - Failed to edit in car instructor with id of ${req.params.primary_key} -- ${e}`
    );
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = editOneEntry;
