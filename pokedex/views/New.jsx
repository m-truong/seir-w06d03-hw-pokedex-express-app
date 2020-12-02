const React = require("react");
const Layout = require("./Layout/Layout.jsx");


class New extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Create a new Fruit</h1>

        <form action="/fruits" method="POST">

          Name: <input name="name" type="text" /> <br />
          Color: <input name="color" type="text" />

          Is Ready to Eat: <input type="checkbox" name="readyToEat" /> <br />

          <input type="submit" name="" value="Create Fruit" />
        </form>
      </Layout>
    );
  }
}

// check color-code to validate-variable
module.exports = New;
