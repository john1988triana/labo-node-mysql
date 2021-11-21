"use strict";

const mysql = require("mysql");
const { Db } = require("./utils/config");

// Creamos nuestra conexión simple con mysql
const connection = mysql.createConnection({
  host: Db.HOST,
  port: Db.PORT,
  user: Db.USER,
  password: Db.PASSWORD,
  database: Db.DB,
});

// Hacemos un test de conectividad
connection.connect((error) => {
  if (error) throw error;
  console.log("Conexión exitosa con la base de datos.");
});

module.exports = connection;
