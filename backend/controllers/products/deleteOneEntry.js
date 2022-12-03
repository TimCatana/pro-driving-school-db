const makeDb = require("../../util/makeDb");

const deleteOneEntry = async (req, res) => {
  const sql = `DELETE FROM products WHERE id = ?;`;
  let returnVal;

  const db = makeDb();

  try {
    const rows = await db.query(sql, [req.params.primary_key]);
    returnVal = { status: 200, query: rows };
  } catch (e) {
    console.log(
      `ERROR - Failed to delete product with id of ${req.params.primary_key} -- ${e}`
    );
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = deleteOneEntry;
