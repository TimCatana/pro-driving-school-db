const makeDb = require("../../util/makeDb");
const { courseTableHeadings } = require("../../constants/dbConstants");

const editOneEntry = async (req, res) => {
  const sql = `
  UPDATE 
    ${courseTableHeadings.tableName} 
  SET 
    ${courseTableHeadings.courseId} = ?, 
    ${courseTableHeadings.capacity} = ?,
    ${courseTableHeadings.isDigital} = ?, 
    ${courseTableHeadings.startDate} = ?, 
    ${courseTableHeadings.endDate} = ?,  
    ${courseTableHeadings.inClassInstructorId} = ? 
  WHERE 
    ${courseTableHeadings.id} = ?;`;

  const db = makeDb();

  try {
    await db.query(sql, [
      parseInt(req.body.courseId),
      parseInt(req.body.courseCapacity),
      req.body.courseIsDigital,
      req.body.courseStartDate,
      req.body.courseEndDate,
      req.body.courseInClassInstructor,
      req.params.primary_key,
    ]);
    res.sendStatus(200);
  } catch (e) {
    console.log(`ERROR - Failed to edit course with id of ${req.params.primary_key} -- ${e}`);
    res.sendStatus(500);
  } finally {
    await db.close();
  }
};

module.exports = editOneEntry;
