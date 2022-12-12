const { inCarInstTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getOneEntry = async (req, res) => {
  const sql = `
  SELECT 
    * 
  FROM 
    ${inCarInstTableHeadings.tableName} 
  WHERE 
    ${inCarInstTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    const result = await db.query(sql, [req.params.primary_key]);
    res.status(200).send(result);
  } catch (e) {
    console.log(`ERROR - Failed to get in car instructor with id of ${req.params.primary_key} -- ${e}`);
    res.status(400).send([]);
  } finally {
    await db.close();
  }
};

module.exports = getOneEntry;
