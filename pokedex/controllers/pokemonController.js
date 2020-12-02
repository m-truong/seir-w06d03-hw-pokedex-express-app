const express = require('express')
const router = express.Router()

// stores data
const pokemon = require('../models/pokemon.js')

// INDEX route
router.get('/', (req, res) => {
    res.render('Index', {
        pokemon: pokemon
    });
})

// SHOW route
router.get('/:indexOfPokemonArray', (req, res) =>{
    res.render('Show', {
        currPokemon: pokemon[req.params.indexOfPokemonArray]
    })
})

// must export 
// red if exporting variable
module.exports = router;