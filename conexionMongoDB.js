const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/BIBLIOTECA';

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado exitosamente a Biblioteca_proyecto');
    } catch (error) {
        console.error('No se pudo conectar exitosamente a Biblioteca_proyecto, error: ' + error);
        process.exit(1);
    }

};

module.exports = connectDB;