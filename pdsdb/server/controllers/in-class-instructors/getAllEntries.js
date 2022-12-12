const { inClassInstTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllEntries = async (req, res) => {
  const sql = `
  SELECT 
    * 
  FROM 
    ${inClassInstTableHeadings.tableName}
  ORDER BY
    ${inClassInstTableHeadings.id} DESC;`;

  const db = makeDb();

  try {
    const result = await db.query(sql);
    res.status(200).send(result);
  } catch (e) {
    console.log(`ERROR - Failed to get all in class instructors -- ${e}`);
    res.status(400).send([]);
  } finally {
    await db.close();
  }
};

module.exports = getAllEntries;
