const { inClassInstTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

const editOneEntry = async (req, res) => {
  const sql = `
  UPDATE 
    ${inClassInstTableHeadings.tableName} 
  SET 
    ${inClassInstTableHeadings.firstName} = ?, 
    ${inClassInstTableHeadings.lastName} = ?, 
    ${inClassInstTableHeadings.driversLicenseId} = ?, 
    ${inClassInstTableHeadings.driversLicenseExpDate} = ? 
  WHERE  
    ${inClassInstTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    await db.query(sql, [
      req.body.iciFirstName,
      req.body.iciLastName,
      req.body.iciDriversLicenseNum,
      req.body.iciDriversLicenseExpDate,
      req.params.primary_key,
    ]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to edit in class instructor with id of ${req.params.primary_key} -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = editOneEntry;
