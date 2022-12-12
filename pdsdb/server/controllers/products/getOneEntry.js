const { productTableHeadings } = require("../../constants/dbConstants");
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
    ${productTableHeadings.tableName} 
  WHERE 
    ${productTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    const result = await db.query(sql, [req.params.primary_key]);
    res.status(200).send(result);
  } catch (e) {
    console.log(`ERROR - Failed to get product with id of ${req.params.primary_key} -- ${e}`);
    res.status(400).send([]);
  } finally {
    await db.close();
  }
};

module.exports = getOneEntry;
