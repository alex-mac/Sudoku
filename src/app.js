import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Board from './components/board';
import Solve from './components/solve';

class App extends Component {
  render() {
    return (
      <div>
        <Header name="Sudoku Solver" />
        <Board />
        <Solve />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#container'))