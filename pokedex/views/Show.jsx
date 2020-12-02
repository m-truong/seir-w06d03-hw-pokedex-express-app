const React = require('react')
const Layout = require("./Layout/Layout.jsx")

class Show extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {

        const pokemon = this.props.pokemon

        return (
            <Layout>
                <h1>Show Page</h1>
                {/* <p> The {pokemon.name} is {pokemon.color} </p> */}
                {/* <p> {pokemon.readyToEat ? "It is ready to eat" : "It is not ready to eat"} </p> */}
            </Layout>
        )
    }
}


module.exports = Show