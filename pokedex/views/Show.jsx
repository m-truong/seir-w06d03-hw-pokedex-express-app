const React = require("react");
const Layout = require("./components/Layout.jsx");

class Show extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const pokemon = this.props.currPokemon;
    const typesArr = pokemon.type;
    const statsObj = pokemon.stats;
    return (
      <Layout>
        <h1>Show Page</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img} alt="" />
        <h3>{pokemon.name}'s Types:</h3>
        <ul>
          {typesArr.map((currType, index) => {
            return <li>{currType}</li>;
          })}
        </ul>
        <h3>{pokemon.name}'s Stats:</h3>
        <ul>
          <li>HP: {statsObj.hp}</li>
          <li>Attack: {statsObj.attack}</li>
          <li>Defense: {statsObj.defense}</li>
          <li>SPAttack: {statsObj.spattack}</li>
          <li>SPDefense: {statsObj.spdefense}</li>
          <li>Speed: {statsObj.speed}</li>
        </ul>
      </Layout>
    );
  }
}

module.exports = Show;
