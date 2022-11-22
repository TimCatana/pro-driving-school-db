const mysql = require("mysql");
const config = require("../util/mysql_config");

const db = mysql.createPool(config);

/**
 *
 * @param {
 *    courseId,
 *    courseStartDate,
 *    courseEndDate,
 *    _isCourseDigital,
 *    courseCapacity,
 *    _courseInClassInstructor
 * } req
 * @param {*} res
 */
exports.addEntry = async (req, res) => {
  const command = `INSERT INTO courses (id, start_date, end_date, is_digital, capacity, in_class_instructor_id) VALUES (?, ?, ?, ?, ?, ?);`;

  db.query(
    command,
    [
      parseInt(req.body.courseId),
      req.body.courseStartDate,
      req.body.courseEndDate,
      1, // req.body._isCourseDigital, // should be 1 or 0, need to do some type changing beforehand
      parseInt(req.body.courseCapacity),
      "123-456-7890-gda", // req.body._courseInClassInstructor, // needs to be a valid in class inst drivers id that is in the in class inst table
    ],
    (err, result) => {
      console.log(err);
      if (err) {
        res.send(500);
      } else {
        res.send(200);
      }
    }
  );
};

exports.editEntry = async (req, res) => {
  console.log("edited");
};

exports.deleteEntry = async (req, res) => {
  console.log("deleted");
};

exports.getAllEntries = async (req, res) => {
  console.log("deleted");
};
