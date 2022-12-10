const { inCarInstTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteOneEntry = async (req, res) => {
  const sql = `
  DELETE FROM 
    ${inCarInstTableHeadings.tableName} 
  WHERE 
    ${inCarInstTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    await db.query(sql, [req.params.primary_key]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to delete in car instructor with id of ${req.params.primary_key} -- ${e}`);
    res.sendStatus(500);
  } finally {
    await db.close();
  }
};

module.exports = deleteOneEntry;
