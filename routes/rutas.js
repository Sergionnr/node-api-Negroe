const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios-controller")

router.get("/hola", (req,res) => {res.send("Hola mundo")});
router.get("/usuarios", usuariosController.findAllUsuarios);
router.post("/usuarios", usuariosController.createUser);
router.get("/usuarios/:id", usuariosController.findUsuario);
router.get("/usuariosdelete/:id", usuariosController.findUsuarioAndDelete);
router.put("/usuarios/:id", usuariosController.updatePassword);

module.exports = router;