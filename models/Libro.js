const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema(
    {
        Nombre_Libro: {
            type: String, 
            required: true
        },
        Cantidad: {
            type: Number, 
            required: true
        },
        Autor: {
            type: String, 
            required: true
        },
        Fecha_Publicacion: {
            type: Date, 
            required: true
        },
        Idioma: {
            type: String, 
            required: true
        },
        Tema: {
            type: String, 
            required: true
        },
    }
);

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;