const makeDb = require("../../util/makeDb");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getOneEntry = async (req, res) => {
  const sql = `SELECT * FROM in_class_inst WHERE id = ?;`;
  let returnVal;

  const db = makeDb();

  try {
    const result = await db.query(sql, [req.params.primary_key]);
    returnVal = { status: 200, query: result };
  } catch (e) {
    console.log(
      `ERROR - Failed to get  in class instructor with id of ${req.params.primary_key} -- ${e}`
    );
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = getOneEntry;
