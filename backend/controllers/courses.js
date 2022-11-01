const mysql = require("mysql");
const config = require("../util/mysql_config");

exports.addEntry = async (req, res) => {
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
