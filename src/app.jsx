const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./components/header');

var App = React.createClass({
  render: function() {
    return <Header name="Sudoku Solver" />;
  }
});

ReactDOM.render(<App />, document.body);
