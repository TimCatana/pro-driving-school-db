const { studentTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

const deleteOneEntry = async (req, res) => {
  const sql = `
  DELETE FROM 
    ${studentTableHeadings.tableName} 
  WHERE 
    ${studentTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    await db.query(sql, [req.params.primary_key]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to delete student with id of ${req.params.primary_key} -- ${e}`);
    res.sendStatus(500);
  } finally {
    await db.close();
  }
};

module.exports = deleteOneEntry;
