// DEPENDENCIES
const express = require("express")
const app = express()
const PORT = 3000

// view engine
const viewEngine = require('express-react-views').createEngine
const methodOverride = require('method-override');

// MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', viewEngine())
// bodyParser for req.body
app.use(express.urlencoded({
    extended: false
}))

// static assets
app.use(express.static('public'))
// override for delete-route and update-route
app.use(methodOverride('_method'))

// CONTROLLER
const pokemonController = require('./controllers/pokemonController.js')
app.use('/pokemon', pokemonController)


// LISTENER
app.listen(PORT, () => {
    console.log('Dude just use the browser i got you on 3000')
})