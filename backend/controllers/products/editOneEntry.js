const { productTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

const editOneEntry = async (req, res) => {
  const sql = `
  UPDATE 
    ${productTableHeadings.tableName} 
  SET 
    ${productTableHeadings.productId} = ?, 
    ${productTableHeadings.name} = ?, 
    ${productTableHeadings.price} = ? 
  WHERE 
    ${productTableHeadings.id} = ?`;

  const db = makeDb();

  try {
    await db.query(sql, [
      parseInt(req.body.productId),
      req.body.productName,
      parseFloat(req.body.productPrice).toFixed(2),
      req.params.primary_key,
    ]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to edit product with id of ${req.params.primary_key} -- ${e}`);
    res.sendStatus(500);
  } finally {
    await db.close();
  }
};

module.exports = editOneEntry;
