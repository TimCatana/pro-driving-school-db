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

  const db = makeDb();

  try {
    await db.query(sql, [
      parseInt(req.body.courseId),
      parseInt(req.body.courseCapacity),
      req.body.courseIsDigital,
      req.body.courseStartDate,
      req.body.courseEndDate,
      req.body.courseInClassInstructor,
    ]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to add course to database -- ${e}`);
    res.sendStatus(400);
  } finally {
    await db.close();
  }
};

module.exports = addOneEntry;
