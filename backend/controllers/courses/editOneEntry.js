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
