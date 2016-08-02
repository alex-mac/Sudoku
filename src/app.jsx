var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header');

var App = React.createClass({
  render: function() {
    return <Header name="Sudoku Solver" />;
  }
});

ReactDOM.render(<App />, document.body);
