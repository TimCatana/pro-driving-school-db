const { productTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

/**
 *
 * @param {

 * } req
 * @param {*} res
 */
const getMostRecentEntry = async (req, res) => {
  const sql = `
  SELECT
    *
  FROM 
    ${productTableHeadings.tableName}
  WHERE
    ${productTableHeadings.id} = 
      ( 
        SELECT MAX
          (${productTableHeadings.id}) 
        FROM 
          ${productTableHeadings.tableName}
      );
  `;

  let returnVal;

  const db = makeDb();

  try {
    const result = await db.query(sql);
    console.log(result);

    returnVal = { status: 200, query: result };
  } catch (e) {
    console.log(`ERROR - Failed to add product to database -- ${e}`);
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = getMostRecentEntry;
