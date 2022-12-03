const makeDb = require("../../util/makeDb");

const editOneEntry = async (req, res) => {
  const sql = `UPDATE courses SET courseId = ?, start_date = ?, end_date = ?, is_digital = ?, capacity = ?, in_class_instructor_id = ? WHERE id = ?`;
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
      req.params.primary_key,
    ]);

    returnVal = { status: 200, query: rows };
  } catch (e) {
    console.log(
      `ERROR - Failed to edit course with id of ${req.params.primary_key} -- ${e}`
    );
    returnVal = { status: 500, query: null };
  } finally {
    await db.close();
    res.send(returnVal);
  }
};

module.exports = editOneEntry;
