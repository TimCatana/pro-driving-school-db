const makeDb = require("../../util/makeDb");

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllEntries = async (req, res) => {
  const sql = `SELECT * FROM in_class_inst;`;
  let returnVal;

  const db = makeDb();

  try {
    const result = await db.query(sql);
    returnVal = { status: 200, query: result };
  } catch (e) {
    console.log(`ERROR - Failed to get all in class instructors -- ${e}`);
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = getAllEntries;
