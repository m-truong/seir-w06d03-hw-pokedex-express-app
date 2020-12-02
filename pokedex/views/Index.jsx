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

                <a href={`/pokemon/${index}`}>See More Info</a>

                {/* <form action={`/pokemon/${index}?_method=delete`} method="POST">
                  <input type="submit" value="DELETE THIS" />
                </form> */}

                {/* Edit the Pokemon */}
                {/* <a href={`/pokemon/${index}/edit`}>Edit {currPokemon.name}</a> */}
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

// always EXPORT this
// yellow if exporting class
module.exports = Index;
