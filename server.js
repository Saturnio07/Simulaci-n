const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const path = require('path'); 

// Conectar a la base de datos
const connectDB = require('../ProyectoClase/conexionMongoDB');
connectDB();

// Modelos y Rutas
const Usuario = require('./models/Usuario');
const Libro = require('./models/Libro');
const Prestamo = require('./models/Prestamo');

const app = express(); 
const port = process.env.PORT || 3002;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// GET para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rutas para usuarios
app.get('/usuario', async (req, res) => {
    try {
        const usuario = await Usuario.find();
        res.json(usuario);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/usuario', async (req, res) => {
    try {
        const newusuario =  new Usuario(req.body);
        await newusuario.save();
        res.status(201).json(newusuario);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);

// Rutas para Libros
app.get('/libro', async (req, res) => {
    try {
        const libro = await Libro.find();
        res.json(libro);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/libro', async (req, res) => {
    try {
        const newlibro =  new Libro(req.body);
        await newlibro.save();
        res.status(201).json(newlibro);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);

// Rutas para préstamos
app.get('/prestamo', async (req, res) => {
    try {
        const prestamo = await Prestamo.find();
        res.json(prestamo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/prestamo', async (req, res) => {
    try {
        const newprestamo =  new Prestamo(req.body);
        await newprestamo.save();
        res.status(201).json(newprestamo);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});