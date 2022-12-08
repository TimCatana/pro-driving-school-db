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
  
  let returnVal;

  const db = makeDb();

  try {
    const rows = await db.query(sql, [
      parseInt(req.body.productId),
      req.body.productName,
      parseFloat(req.body.productPrice).toFixed(2),
    ]);

    returnVal = { status: 200, query: rows };
  } catch (e) {
    console.log(`ERROR - Failed to add product to database -- ${e}`);
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = addOneEntry;
