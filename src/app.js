// var React = require('react');
// var ReactDOM = require('react-dom');
// var Header = require('./components/header');

// var App = React.createClass({
//   render: function() {
//     return <div>helloWorld</div>
//   }
// });

// ReactDOM.render(<App />, document.body);
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

class App extends Component {
  render() {
    return <div>helloWorld</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#container'))