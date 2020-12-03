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

// NEW route // displays form
router.get('/new', (req, res) => {
    res.render('New')
})

// DELETES route 
router.delete('/:indexOfPokemonArray', (req, res) => {
    pokemon.splice(req.params.indexOfPokemonArray, 1);
    res.redirect('/pokemon');
})

// UPDATE route
router.put('/:indexOfPokemonArray', (req, res) => {
    pokemon[req.params.indexOfPokemonArray] = req.body;
    res.redirect('/pokemon');
})
// CREATE route
router.post('/', (req, res) => {
    pokemon.push(req.body);
    res.redirect("/pokemon");

})

// EDIT
router.get('/:indexOfPokemonArray/edit', (req, res) => {
    res.render('Edit', { 
        currPokemon: pokemon[req.params.indexOfPokemonArray], // the pokemon object
        index: req.params.indexOfPokemonArray // ... and currIndex
    })
})

// SHOW route
router.get('/:indexOfPokemonArray', (req, res) => {
    res.render('Show', {
        currPokemon: pokemon[req.params.indexOfPokemonArray]
    })
})

// export
module.exports = router;