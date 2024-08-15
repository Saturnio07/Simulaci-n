const express = require('express'); 
const router = express.Router();
const Prestamo = require('../models/Prestamo'); 

router.get('/Prestamo', async (req, res) => {
    try {
        const Prestamo = await Prestamo.find();
        res.send(Prestamo);
    }
    catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;