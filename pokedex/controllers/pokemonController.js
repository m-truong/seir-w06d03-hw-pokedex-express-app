const express = require('express')
const router = express.Router()

// stores data
const pokemon = require('../models/pokemon.js')

router.get('/', (req, res) => {
    res.render('Index', {
        pokemon: pokemon
    });
})

// must export 
// red if exporting variable
module.exports = router;