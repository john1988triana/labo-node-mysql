# Laboratorio Node con MySQL

Mini laboratorio de un proyecto REST API con CRUD completo de [NodeJs](https://nodejs.org/es/) con [ExpressJs](https://expressjs.com/es/) y Base de datos 
relacional con [MySQL](https://www.mysql.com/).


## 1. Antes de empezar

### Base de datos

Configurar de la base de datos en el servidor local de MySQL.

1. Exportar el .sql que esta en la ruta `./docu/tutorial.sql`.

2. Modificar las credeciales de la conexión en el archivo `./src/utils/config.js`

~~~
module.exports.Db = {
  HOST: "your_host",
  PORT: 3306,
  USER: "your_user",
  PASSWORD: "your_password",
  DB: "your_database",
}; 
~~~

### Ejecutar Aplicación

Para iniciar nuestra aplicación vamos a ejecutar los siguientes comandos en el respectivo orden:

1. Instalar primero nuestras dependecias
### `npm install`

2. Tenemos dos formas de ejecutar nuestra aplicación en modo dev o prod.
   
Para ejecutar en modo dev:
### `npm run dev`

Para ejecutar en modo prod:
### `npm run start`


## 2. Probar Rest API


Podemos probar nuestro CRUD Rest API de dos formas:

1. A través de Postman en el cual es exportar el archivo que esta en la siguiente ruta `./docu/Prueba-Tutoria.postman_collection.json`
2. También lo podemos probar en el VSCode con una extensión llamada **Rest Client** y abrimos nuestro archivo .http `./docu/rest-api.http` y ejecutamos cada request.


## 3. Dependencias utilizadas


Una breve explicación de las depedencias utilizadas para nuestra aplicación:

- **[Express](https://www.npmjs.com/package/express) :** Es un framework que nos facilita el desarrollo en NodeJS.
- **[MySQL](https://www.npmjs.com/package/mysql):** Es un driver para la conexión con MySQL.
- **[CORS](https://www.npmjs.com/package/cors):** Es un paquete para habilitar el CORS con varias opciones de nustro middleware.
- **[Nodemon](https://www.npmjs.com/package/nodemon):** Es una herramienta en la cual nos ayuda reiniciar automáticamente nuestra aplicación, muy util en modo desarrollo.

