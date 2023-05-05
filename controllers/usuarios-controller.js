const Usuario = require("../models/usuario");

function findAllUsuarios(req, res){
    
    Usuario.find().then((usuarios) => {
        console.log(usuarios);
        return res.status(200).json({
            error: false,
            message: "success",
            code: 10,
            data: usuarios,
        });
    })
    .catch(
        (error) => {
            console.log(error);
            return res.status(500).json({
                error: true,
                message: "Error",
                code: 0,
            });
        }
    );
}

function createUser(req, res) {
    console.log("Creando usuario...");
    console.log(req.body);
    let usuario = new Usuario({
        id: req.body.id,
        nombre: req.body.nombre,
        password: req.body.password,
        email: req.body.email
    });

    usuario.save(usuario).then((data) => {
        res.status(200).send({
            error: false,
            message: "OK",
            code: 20,
            data: data
        });
    })
    .catch((error) => {
        res.status(500).send({
            error: true,
            message: "Server down",
            code: 0
        });
    });
}

function findUsuario(req, res) {
    const id = req.params.id;
    Usuario.findById(id).then((data) => {
        if (!data)
            res.status(404).send({
                message: "No encontrado " + id
            });
        else
            res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error con id " + id
        });
    });
}

function findUsuarioAndDelete(req, res) {
    const id = req.params.id;
    Usuario.findByIdAndRemove(id).then((data) => {
        if (!data)
            res.status(404).send({
                message: "No encontrado " + id
            });
        else
            res.send({
                message: "Usuario con id " + id + " eliminado correctamente"
            });
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error con id " + id
        });
    });
}

function updatePassword(req, res) {
    const id = req.params.id;
    Usuario.findByIdAndUpdate(id, req.body).then((data) => {
        if (!data)
            res.status(404).send({
                message: "No encontrado " + id
            });
        else
            res.send({
                message: "Password del usuario con id " + id + " actualizada correctamente"
            });
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error con id " + id
        });
    });
}

module.exports = {
    findAllUsuarios, createUser, findUsuario, findUsuarioAndDelete, updatePassword
};