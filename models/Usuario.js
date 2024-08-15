const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema(
    {
        Nombre: {
            type: String, 
            required: true
        },
        Apellido: {
            type: String, 
            required: true
        },
        email: {
            type: String, 
            required: true
        },
        cedula: {
            type: String, 
            required: true
        },
        Contrasena: {
            type: String, 
            required: true
        },
        Direccion: {
            type: String, 
            required: true
        },
    }
);

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;