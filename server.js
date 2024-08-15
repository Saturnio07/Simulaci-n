const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const path = require('path'); 

// Conectar a la base de datos
const connectDB = require('../Simulaci-n/conexionMongoDB');
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

// ver usuarios
app.get('/usuario', async (req, res) => {
    try {
        const usuario = await Usuario.find();
        res.json(usuario);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// agregar usuarios
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
// actualizar usuarios
app.put('/usuario/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!usuario) {
            res.status(404).json({message: "Elemento no encontrado"});
        }

        res.json(usuario);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// eliminar usuarios
app.delete('/usuario/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);

        if(!usuario) {
            res.status(404).json({message: "Elemento no encontrado"});
        }

        res.json({message: "Elemento eliminado"});
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);

// Rutas para Libros

// ver libros
app.get('/libro', async (req, res) => {
    try {
        const libro = await Libro.find();
        res.json(libro);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// agregar libros
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
// actualizar libros
app.put('/libro/:id', async (req, res) => {
    try {
        const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!libro) {
            res.status(404).json({message: "Elemento no encontrado"});
        }

        res.json(libro);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// eliminar libros
app.delete('/libro/:id', async (req, res) => {
    try {
        const libro = await Libro.findByIdAndDelete(req.params.id);

        if(!libro) {
            res.status(404).json({message: "Elemento no encontrado"});
        }

        res.json({message: "Elemento eliminado"});
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);

// Rutas para préstamos

// ver préstamos
app.get('/prestamo', async (req, res) => {
    try {
        const prestamo = await Prestamo.find();
        res.json(prestamo);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// agregar préstamos
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
// actualizar préstamos
app.put('/prestamo/:id', async (req, res) => {
    try {
        const prestamo = await Prestamo.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if(!prestamo) {
            res.status(404).json({message: "Elemento no encontrado"});
        }

        res.json(prestamo);
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// eliminar préstamos
app.delete('/prestamo/:id', async (req, res) => {
    try {
        const prestamo = await Prestamo.findByIdAndDelete(req.params.id);

        if(!prestamo) {
            res.status(404).json({message: "Elemento no encontrado"});
        }

        res.json({message: "Elemento eliminado"});
    } catch (error) {
        res.status(400).json({message: error.message});
        
    }
}
);
// Iniciar servidor
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});