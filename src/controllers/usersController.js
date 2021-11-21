"use strict";

// Llamamos nuestro modelo, donde estan todas las consultas SQL
const User = require("../models/usersModel");

// Método para obtener todos los usuarios
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error al obtener los usuarios.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};
// Método para obtener un usuario
exports.findOne = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontró el ususario con el ID ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error al obtener el usuario con el ID " + req.params.id,
        });
      }
    } else {
      res.status(200).send(data);
    }
  });
};
// Método para crear un usuario
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "¡El contenido no puede estar vacío!",
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
    if (err) {
      res.status(500).send({
        message: err.message || "Error al momento de crear el usuario.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};
// Método para actualizar un usuario
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "¡El contenido no puede estar vacío!",
    });
  }

  User.update(req.params.id, new User(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontró el usuario co el ID ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error al momento de modificar el usuario con el ID " + req.params.id,
        });
      }
    } else {
      res.status(200).send(data);
    }
  });
};
// Método para actualizar un usuario
exports.delete = (req, res) => {
  User.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontró el usuario con el ID ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error al momento de eliminar el usuario con el ID " + req.params.id,
        });
      }
    } else res.status(200).send({ message: `Usuario eliminado con éxito` });
  });
};
