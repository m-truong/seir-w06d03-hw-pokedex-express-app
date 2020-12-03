const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Pokemon</h1>
        <a href="/pokemon/new">Create a new pokemon</a>
        <ul>
          {this.props.pokemon.map((currPokemon, index) => {
            return (
              <li>
                <p>{currPokemon.name}</p>
                <img src={currPokemon.img}/>
                <br/>
                <a href={`/pokemon/${index}`}>See More Info</a>
                <br/>
                <form action={`/pokemon/${index}?_method=delete`} method="POST">
                  <input type="submit" value="Delete Pokemon" />
                </form>
                <br/>
                <a href={`/pokemon/${index}/edit`}>Edit {currPokemon.name}</a>
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

module.exports = Index;
