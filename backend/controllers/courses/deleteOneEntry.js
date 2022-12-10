const makeDb = require("../../util/makeDb");
const { courseTableHeadings } = require("../../constants/dbConstants");

const deleteOneEntry = async (req, res) => {
  const sql = `
  DELETE FROM 
    ${courseTableHeadings.tableName} 
  WHERE 
    ${courseTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    await db.query(sql, [req.params.primary_key]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to delete course with id of ${req.params.primary_key} -- ${e}`);
    res.sendStatus(500);
  } finally {
    await db.close();
  }
};

module.exports = deleteOneEntry;
