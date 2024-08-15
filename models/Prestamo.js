const mongoose = require('mongoose');

const PrestamoSchema = new mongoose.Schema(
    {
        id_usuario: {
            type: String, 
            required: true
        },
        id_libro: {
            type: String, 
            required: true
        },
        fecha_prestamo: {
            type: Date, 
            required: true
        },
        fecha_devolucion: {
            type: Date, 
            required: true
        },
    }
);

const Prestamo = mongoose.model('Prestamo', PrestamoSchema);

module.exports = Prestamo;