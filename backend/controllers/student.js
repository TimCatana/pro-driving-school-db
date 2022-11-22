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
      1, // req.body.studentGender // TODO - make this a varchar and have three options m, f and not declared
      req.body.studentCellPhoneNumber,
      req.body.studentHomePhoneNumber,
      req.body.studentAddress,
      req.body.studentAddressCity,
      req.body.studentAddressPostalCode,
      req.body.studentDriversLicenseNumber,
      req.body.studentDriversLicenseNumberIssuedDate,
      req.body.studentDriversLicenseNumberExpDate,
      1234321, // parseInt(req.body.studentRegisteredCourseId), // id needs to exist in courses table
      123456, // parseInt(req.body.studentRegisteredProductId), // id needs to exist in products table
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

exports.editEntry = async (req, res) => {
  console.log("edited");
};

exports.deleteEntry = async (req, res) => {
  console.log("deleted");
};

exports.getAllEntries = async (req, res) => {
  console.log("deleted");
};
