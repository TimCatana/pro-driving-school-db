const mysql = require("mysql");
const config = require("../util/mysql_config");

const db = mysql.createPool(config);

/**
 *
 * @param {
 *    productId,
 *    productName,
 *    productPrice
 * } req
 * @param {*} res
 */
exports.addEntry = async (req, res) => {
  const command = `INSERT INTO products (id, name, price) VALUES (?, ?, ?);`;

  db.query(
    command,
    [
      parseInt(req.body.productId),
      req.body.productName,
      parseFloat(req.body.productPrice).toFixed(2),
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
  const command = `SELECT * FROM products;`;

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
  const command = `SELECT * FROM products WHERE id = ?;`;

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
  const command = `DELETE FROM products WHERE id = ?;`;

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
