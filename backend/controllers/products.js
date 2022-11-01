const mysql = require("mysql");
const config = require("../util/mysql_config");


const db = mysql.createPool(config)

exports.addEntry = async (req, res) => {
  const command = `INSERT INTO new_table (id, name) VALUES (?, ?);`;

  // const id = req.body.id

  // let connection = mysql.createConnection(config);
  db.query(command, [122, 'adfnenwdname'], (err, result) => {
    res.send("finished adding")
  });
  // connection.end();

  console.log(process.env.MYSQL_HOST);
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
