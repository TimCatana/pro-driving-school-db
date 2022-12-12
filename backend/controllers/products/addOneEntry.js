const { productTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

/**
 *
 * @param {

 * } req
 * @param {*} res
 */
const addOneEntry = async (req, res) => {
  const sql = `
  INSERT INTO 
    ${productTableHeadings.tableName} 
  (
    ${productTableHeadings.productId}, 
    ${productTableHeadings.name}, 
    ${productTableHeadings.price}
  ) 
  VALUES (?, ?, ?);`;

  const db = makeDb();

  try {
    await db.query(sql, [
      parseInt(req.body.productId),
      req.body.productName,
      parseFloat(req.body.productPrice).toFixed(2),
    ]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to add product to database -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = addOneEntry;
