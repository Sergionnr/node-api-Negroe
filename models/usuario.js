const mongoose = require("mongoose"); //Definción de la libreria mongoose

const usuarioSchema = new mongoose.Schema({ //Definición del objeto tipo Usuario (su esquema) con sus atributos en formato JSON
    id:{
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Usuario", usuarioSchema); //Dar visibilidad a la clase de manera pública