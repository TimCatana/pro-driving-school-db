const mysql = require("mysql");
const config = require("../util/mysql_config");

const db = mysql.createPool(config);

/**
 *
 * @param {
 *    inCarInstFirstName,
 *    inCarInstLastName,
 *    inCarInstDriversLicense,
 *    inCarInstDriversLicenseExpDate,
 *    inCarInstGLicense,
 *    inCarInstGLicenseExpDate
 * } req
 * @param {*} res
 */
exports.addEntry = async (req, res) => {
  const command = `INSERT INTO in_car_inst (inst_drivers_license_id, inst_drivers_license_exp_date, first_name, last_name, g_drivers_license_id, g_drivers_license_exp_date) VALUES (?, ?, ?, ?, ?, ?);`;

  db.query(
    command,
    [
      req.body.inCarInstDriversLicense,
      req.body.inCarInstDriversLicenseExpDate,
      req.body.inCarInstFirstName,
      req.body.inCarInstLastName,
      req.body.inCarInstGLicense,
      req.body.inCarInstGLicenseExpDate,
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
