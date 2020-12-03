const React = require("react");
const Layout = require("./components/Layout.jsx");

class New extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Create a new Pokemon</h1>
        <form action="/pokemon" method="POST">
          Name: <input name="name" type="text" /> <br />
          <input type="submit" name="" value="Create Pokemon" />
        </form>
      </Layout>
    );
  }
}

module.exports = New;
