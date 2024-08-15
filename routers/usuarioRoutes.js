const express = require('express'); 
const router = express.Router();
const Usuario = require('../models/Usuario'); 

router.get('/Usuario', async (req, res) => {
    try {
        const Usuario = await Usuario.find();
        res.send(Usuario);
    }
    catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;