const React = require("react");


class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Pokedex App</title>
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>

          <nav>
              <a href="/pokemon">Home</a>
          </nav>

          {this.props.children}

          <footer>
              copyright Mike's Pokedex App
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
