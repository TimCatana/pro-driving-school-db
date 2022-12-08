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

  let returnVal;

  const db = makeDb();

  try {
    const rows = await db.query(sql, [
      parseInt(req.body.productId),
      req.body.productName,
      parseFloat(req.body.productPrice).toFixed(2),
      req.params.primary_key,
    ]);

    returnVal = { status: 200, query: rows };
  } catch (e) {
    console.log(
      `ERROR - Failed to edit product with id of ${req.params.primary_key} -- ${e}`
    );
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = editOneEntry;
