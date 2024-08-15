const express = require('express'); 
const router = express.Router();
const Libro = require('../models/Libro'); 

router.get('/Libro', async (req, res) => {
    try {
        const Libro = await Libro.find();
        res.send(Libro);
    }
    catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;