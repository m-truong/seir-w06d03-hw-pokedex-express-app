const React = require('react')
const Layout = require("./components/Layout.jsx")

class Show extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {

        const pokemon = this.props.currPokemon

        return (
            <Layout>
                <h1>Show Page</h1>
                <h2>{pokemon.name}</h2> 
                <img src={pokemon.img} alt=""/>

                <p> The {pokemon.name}  </p>
                {/* <p> {pokemon.readyToEat ? "It is ready to eat" : "It is not ready to eat"} </p> */}
            </Layout>
        )
    }
}


module.exports = Show