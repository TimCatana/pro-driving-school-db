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

  let returnVal;

  const db = makeDb();

  try {
    const rows = await db.query(sql, [req.params.primary_key]);
    returnVal = { status: 200, query: rows };
  } catch (e) {
    console.log(
      `ERROR - Failed to delete in car instructor with id of ${req.params.primary_key} -- ${e}`
    );
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = deleteOneEntry;
