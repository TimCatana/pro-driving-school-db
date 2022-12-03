const util = require("util");
const mysql = require("mysql");

const config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  dateStrings: "date",
};

const makeDb = () => {
  const connection = mysql.createConnection(config);

  return {
    // connection() {
    //   return util.promisify(connection.query).call(connection, sql, args);
    // },
    query(sql, args) {
      return util.promisify(connection.query).call(connection, sql, args);
    },
    beginTransaction() {
      return util.promisify(connection.beginTransaction).call(connection);
    },
    commit() {
      return util.promisify(connection.commit).call(connection);
    },
    rollback() {
      return util.promisify(connection.rollback).call(connection);
    },
    close() {
      return util.promisify(connection.end).call(connection);
    },
  };
};

module.exports = makeDb;
