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

exports.getAllEntries = async (req, res) => {
  const command = `SELECT * FROM in_class_inst;`;

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
  const command = `SELECT * FROM in_class_inst WHERE inst_drivers_license_id = ?;`;

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
  const command = `DELETE FROM in_class_inst WHERE inst_drivers_license_id = ?;`;

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
