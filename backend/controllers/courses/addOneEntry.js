const { courseTableHeadings } = require("../../constants/dbConstants");
const makeDb = require("../../util/makeDb");

/**
 *
 * @param {
 *
 * } req
 * @param {*} res
 */
const addOneEntry = async (req, res) => {
  const sql = `
  INSERT INTO 
    ${courseTableHeadings.tableName} 
  (${courseTableHeadings.courseId},  ${courseTableHeadings.capacity}, ${courseTableHeadings.isDigital}, ${courseTableHeadings.startDate}, ${courseTableHeadings.endDate}, ${courseTableHeadings.inClassInstructorId}
  ) 
  VALUES (?, ?, ?, ?, ?, ?);`;
  let returnVal;

  const db = makeDb();

  try {
    const rows = await db.query(sql, [
      parseInt(req.body.courseId),
      parseInt(req.body.courseCapacity),
      req.body.courseIsDigital,
      req.body.courseStartDate,
      req.body.courseEndDate,
      req.body.courseInClassInstructor,
    ]);

    returnVal = { status: 200, query: rows };
  } catch (e) {
    console.log(`ERROR - Failed to add course to database -- ${e}`);
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = addOneEntry;
