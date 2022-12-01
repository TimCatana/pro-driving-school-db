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
      req.body.iciDriversLicenseNum,
      req.body.iciDriversLicenseExpDate,
      req.body.iciFirstName,
      req.body.iciLastName,
      req.body.iciGLicenseNum,
      req.body.iciGLicenseExpDate,
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
  const command = `UPDATE in_car_inst SET inst_drivers_license_id=?, inst_drivers_license_exp_date=?, first_name=?, last_name=?, g_drivers_license_id=?, g_drivers_license_exp_date=? WHERE id = ?`;

  db.query(
    command,
    [
      req.body.iciDriversLicenseNum,
      req.body.iciDriversLicenseExpDate,
      req.body.iciFirstName,
      req.body.iciLastName,
      req.body.iciGLicenseNum,
      req.body.iciGLicenseExpDate,
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
  const command = `SELECT * FROM in_car_inst;`;

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
  const command = `SELECT * FROM in_car_inst WHERE id = ?;`;

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
  const command = `DELETE FROM in_car_inst WHERE id = ?;`;

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
