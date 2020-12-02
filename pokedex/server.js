// DEPENDENCIES
const express = require("express")
const app = express()
const PORT = 3000
const viewEngine = require('express-react-views').createEngine
const methodOverride = require('method-override');

// MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', viewEngine())
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

// CONTROLLER
const pokemonController = require('./controllers/pokemonController.js')


app.use('/pokemon', pokemonController)
// LISTENER
app.listen(PORT, () => {
    console.log('Dude just use the browser i got you on 3000')
})