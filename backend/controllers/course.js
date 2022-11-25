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
 *    courseInClassInstructor
 * } req
 * @param {*} res
 */
exports.addEntry = async (req, res) => {
  const command = `INSERT INTO courses (courseId, start_date, end_date, is_digital, capacity, in_class_instructor_id) VALUES (?, ?, ?, ?, ?, ?);`;

  db.query(
    command,
    [
      parseInt(req.body.courseId),
      req.body.courseStartDate,
      req.body.courseEndDate,
      1, // req.body._isCourseDigital, // should be 1 or 0, need to do some type changing beforehand
      parseInt(req.body.courseCapacity),
      parseInt(req.body.courseInClassInstructor), // needs to be a valid in class inst drivers id that is in the in class inst table
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(500);
      } else {
        res.send(200);
      }
    }
  );
};

exports.editOneEntry = async (req, res) => {
  const command = `UPDATE courses SET courseId = ?, start_date = ?, end_date = ?, is_digital = ?, capacity = ?, in_class_instructor_id = ? WHERE id = ?`;

  db.query(
    command,
    [
      parseInt(req.body.courseId),
      req.body.courseStartDate,
      req.body.courseEndDate,
      1, // req.body._isCourseDigital, // should be 1 or 0, need to do some type changing beforehand
      parseInt(req.body.courseCapacity),
      parseInt(req.body.courseInClassInstructor), // needs to be a valid in class inst drivers id that is in the in class inst table
      req.params.primary_key,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ status: 500 });
      } else {
        res.send({ status: 200 });
      }
    }
  );
};

exports.getAllEntries = async (req, res) => {
  const command = `SELECT * FROM courses;`;

  db.query(command, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ status: 500, query: null });
    } else {
      res.send({ status: 200, query: result });
    }
  });
};

exports.getOneEntry = async (req, res) => {
  const command = `SELECT * FROM courses WHERE id = ?;`;

  db.query(command, [req.params.primary_key], (err, result) => {
    if (err) {
      console.log(err);
      res.send({ status: 500, query: null });
    } else {
      res.send({ status: 200, query: result });
    }
  });
};

exports.deleteOneEntry = async (req, res) => {
  const command = `DELETE FROM courses WHERE id = ?;`;

  db.query(command, [req.params.primary_key], (err, result) => {
    if (err) {
      res.send({ status: 500 });
    } else {
      result.affectedRows == 0
        ? res.send({ status: 501 })
        : res.send({ status: 200 });
    }
  });
};
