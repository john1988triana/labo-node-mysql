'use strict'

const mysql = require("mysql");
const { Db } = require("./utils/config");

const connection = mysql.createConnection({
  host: Db.HOST,
  port: Db.PORT,
  user: Db.USER,
  password: Db.PASSWORD,
  database: Db.DB
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;