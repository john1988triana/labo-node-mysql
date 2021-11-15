'use strict'

const User = require("../models/usersModel");

exports.findAll = (req, res) => {
  
    User.getAll((err, data) => {
      if (err){  
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        }else{ 
            res.status(200).send(data);
        }
    });
};

exports.findOne = (req, res) => {

    User.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving user with id " + req.params.id
                });
            }
        }else{ 
            res.send(data);
        }
    });
};

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    const user = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      dni: req.body.dni,
      phone: req.body.phone,
      address: req.body.address,
    });
  
    User.create(user, (err, data) => {
        if (err){
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Users."
            });
        }else{
            res.send(data);
        } 
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    console.log(req.body);
  
    User.update(req.params.id, new User(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Not found User with id ${req.params.id}.`
            });
            } else {
                res.status(500).send({
                    message: "Error updating User with id " + req.params.id
                });
            }
        } else{
            res.send(data);
        } 
    });
  };

  exports.delete = (req, res) => {
        User.remove(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found User with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete User with id " + req.params.id
                    });
                }
            } else res.send({ message: `User was deleted successfully!` });
        });
  };