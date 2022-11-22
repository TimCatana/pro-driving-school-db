const mysql = require("mysql");
const config = require("../util/mysql_config");

const db = mysql.createPool(config);

/**
 *
 * @param {
 *    inClassInstFirstName,
 *    inClassInstLastName,
 *    inClassInstDriversLicense,
 *    inClassInstDriversLicenseExpDate
 * } req
 * @param {*} res
 */
exports.addEntry = async (req, res) => {
  const command = `INSERT INTO in_class_inst (inst_drivers_license_id, inst_drivers_license_exp_date, first_name, last_name) VALUES (?, ?, ?, ?);`;

  db.query(
    command,
    [
      req.body.inClassInstDriversLicense,
      req.body.inClassInstDriversLicenseExpDate,
      req.body.inClassInstFirstName,
      req.body.inClassInstLastName,
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
