'use strict'

const router = require('express').Router();
const UsersCtrl = require('../controllers/usersController');

router.get('/', UsersCtrl.findAll);

router.get("/:id", UsersCtrl.findOne);

router.post("/", UsersCtrl.create);

router.put("/:id", UsersCtrl.update);

router.delete("/:id", UsersCtrl.delete);

module.exports = router;
