const React = require("react");
const Layout = require("./components/Layout.jsx");

class Edit extends React.Component {
  render() {
    const pokemon = this.props.currPokemon;
    const index = this.props.index;
    return (
      <Layout>
        <h1>{pokemon.name} Edit Page</h1>
        <form action={`/pokemon/${index}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" value={pokemon.name} />
          <br />
          <input type="submit" name="" value="Submit Edits" />
        </form>
      </Layout>
    );
  }
}
module.exports = Edit;
