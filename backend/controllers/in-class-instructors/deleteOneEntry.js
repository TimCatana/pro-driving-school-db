const { inClassInstTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

const deleteOneEntry = async (req, res) => {
  const sql = `
  DELETE FROM 
    ${inClassInstTableHeadings.tableName} 
  WHERE 
    ${inClassInstTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    await db.query(sql, [req.params.primary_key]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to delete in class instructor with id of ${req.params.primary_key} -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = deleteOneEntry;
