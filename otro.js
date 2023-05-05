const cors = require("cors");
const express = require("express");

//Crear server
const app = express();
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Rutas
port = 3000
//port = process.env.PORT || 3001;
//Iniciar el servidor
app.listen(port, () => console.log("El servidor esta escuchando..."));