"use strict";

// Declaramos express y cors
const express = require("express");
const cors = require("cors");
// Llamamos nuestras variables
const { App } = require("./src/utils/config");
// Llamamos nuestra config principal de las rutas
const router = require("./src/routers");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Indicamos que nuestra ruta empieza por /api
app.use("/api", router);

// Levantamos nuestro puerto indicado en el config
app.listen(App.PORT, () => console.log(`Listening on port ${App.PORT}`));
