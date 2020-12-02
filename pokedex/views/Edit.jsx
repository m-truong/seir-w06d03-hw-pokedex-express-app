const React = require("react");
const Layout = require("./components/Layout.jsx");

class Edit extends React.Component {
  render() {

    return (
      <Layout>

        <h1>{fruit.name} Edit Page</h1>

        <form action={`/fruits/${index}?_method=PUT`} method="POST">

          Name: <input type="text" name="name" value={fruit.name} />
          <br />
          Color: <input type="text" name="color" value={fruit.color} />
          <br />
          Is Ready To Eat:
          <input
            type="checkbox"
            name="readyToEat"

            checked={fruit.readyToEat ? "checked" : ""}
          />
          <br />
          <input type="submit" name="" value="Submit Changes" />
        </form>
      </Layout>
    );
  }
}
module.exports = Edit;
