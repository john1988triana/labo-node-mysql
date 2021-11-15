'use strict'

const sql = require("../db");

// constructor
const Users = function(user) {
  this.name = user.name;
  this.lastname = user.lastname;
  this.dni = user.dni;
  this.phone = user.phone;
  this.address = user.address;
};

Users.getAll = (result) => {
    let query = "SELECT * FROM users";
  
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
  
        console.log("users: ", res);
        result(null, res);
    });
};

Users.findById = (id, result) => {
    sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
  
        result({ kind: "not_found" }, null);
    });
};

Users.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

Users.update = (id, user, result) => {
    sql.query(
        "UPDATE users SET name = ?, lastname = ?, dni = ?, phone = ?, address = ? WHERE id = ?",
        [user.name, user.lastname, user.dni, user.phone, user.address, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
  
            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null);
                return;
            }
  
            console.log("updated user: ", { id: id, ...user });
            result(null, { id: id, ...user });
    });
};

Users.remove = (id, result) => {
    
    sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
  
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
  
        console.log("deleted users with id: ", id);
        result(null, res);
    });
};

module.exports = Users;