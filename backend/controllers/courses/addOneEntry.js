const makeDb = require("../../util/makeDb");

/**
 *
 * @param {
 *    courseId,
 *    courseStartDate,
 *    courseEndDate,
 *    _isCourseDigital,
 *    courseCapacity,
 *    courseInClassInstructor
 * } req
 * @param {*} res
 */
const addOneEntry = async (req, res) => {
  const sql = `INSERT INTO courses (courseId, start_date, end_date, is_digital, capacity, in_class_instructor_id) VALUES (?, ?, ?, ?, ?, ?);`;
  let returnVal;

  const db = makeDb();

  try {
    const rows = await db.query(sql, [
      parseInt(req.body.courseId),
      req.body.courseStartDate,
      req.body.courseEndDate,
      req.body.courseIsDigital,
      parseInt(req.body.courseCapacity),
      parseInt(req.body.courseInClassInstructor),
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
