const mysql = require("mysql");
const config = require("../util/mysql_config");

const db = mysql.createPool(config);

/**
 *
 * @param {
 *    NOTE: id is auto incremented
 *    studentFirstName,
 *    studentMiddleName,
 *    studentLastName,
 *    studentDateOfBirth,
 *    studentGender,
 *    studentCellPhoneNumber,
 *    studentHomePhoneNumber,
 *    studentAddress,
 *    studentAddressCity,
 *    studentAddressPostalCode,
 *    studentDriversLicenseNumber,
 *    studentDriversLicenseNumberIssuedDate,
 *    studentDriversLicenseNumberExpDate,
 *    studentRegisteredCourseId,
 *    studentRegisteredProductId,
 * } req
 * @param {*} res
 */
exports.addEntry = async (req, res) => {
  const command = `INSERT INTO students (first_name, middle_name, last_name, date_of_birth, gender, address, address_city, address_postal_code, cell_phone_number, home_phone_number, drivers_license_id, drivers_license_date_issued, drivers_license_exp_date, registered_course, purchased_product) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  db.query(
    command,
    [
      req.body.studentFirstName,
      req.body.studentMiddleName,
      req.body.studentLastName,
      req.body.studentDateOfBirth,
      req.body.studentGender, // TODO - make this a varchar and have three options m, f and not declared
      req.body.studentAddress,
      req.body.studentAddressCity,
      req.body.studentAddressPostalCode,
      req.body.studentCellPhoneNumber,
      req.body.studentHomePhoneNumber,
      req.body.studentDriversLicenseNumber,
      req.body.studentDriversLicenseNumberIssuedDate,
      req.body.studentDriversLicenseNumberExpDate,
      parseInt(req.body.studentRegisteredCourseId), // id needs to exist in courses table
      parseInt(req.body.studentRegisteredProductId), // id needs to exist in products table
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
  const command = `UPDATE students SET first_name=?, middle_name=?, last_name=?, date_of_birth=?, gender=?, address=?, address_city=?, address_postal_code=?, cell_phone_number=?, home_phone_number=?, drivers_license_id=?, drivers_license_date_issued=?, drivers_license_exp_date=?, registered_course=?, purchased_product=? WHERE id = ?`;

  db.query(
    command,
    [
      req.body.studentFirstName,
      req.body.studentMiddleName,
      req.body.studentLastName,
      req.body.studentDateOfBirth,
      req.body.studentGender, // TODO - make this a varchar and have three options m, f and not declared
      req.body.studentAddress,
      req.body.studentAddressCity,
      req.body.studentAddressPostalCode,
      req.body.studentCellPhoneNumber,
      req.body.studentHomePhoneNumber,
      req.body.studentDriversLicenseNumber,
      req.body.studentDriversLicenseNumberIssuedDate,
      req.body.studentDriversLicenseNumberExpDate,
      parseInt(req.body.studentRegisteredCourseId), // id needs to exist in courses table
      parseInt(req.body.studentRegisteredProductId), // id needs to exist in products table
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
  const command = `SELECT * FROM students;`;

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
  const command = `SELECT * FROM students WHERE id = ?;`;

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
  const command = `DELETE FROM students WHERE id = ?;`;

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
