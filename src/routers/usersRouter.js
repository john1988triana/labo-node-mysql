"use strict";

const router = require("express").Router();
// Llamamos nuestro controlador
const UsersCtrl = require("../controllers/usersController");

// Indicamos la ruta para obtener todos los usuarios
router.get("/", UsersCtrl.findAll);

// Indicamos la ruta para obtener un solo usuario
router.get("/:id", UsersCtrl.findOne);

// Indicamos la ruta para crear nuestro usuario
router.post("/", UsersCtrl.create);

// Indicamos la ruta para modificar un usuario
router.put("/:id", UsersCtrl.update);

// Indicamos la ruta para eliminar un uusario
router.delete("/:id", UsersCtrl.delete);

module.exports = router;
