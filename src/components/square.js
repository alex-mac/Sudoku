import React, {Component} from 'react';

export default class Square extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: {
        row1: [11, 12, 13, 14, 15, 16, 17, 18, 19],
        row2: [21, 22, 23, 24, 25, 26, 27, 28, 29],
        row3: [31, 32, 33, 34, 35, 36, 37, 38, 39],
        row4: [41, 42, 43, 44, 45, 46, 47, 48, 49],
        row5: [51, 52, 53, 54, 55, 56, 57, 58, 59],
        row6: [61, 62, 63, 64, 65, 66, 67, 68, 69],
        row7: [71, 72, 73, 74, 75, 76, 77, 78, 79],
        row8: [81, 82, 83, 84, 85, 86, 87, 88, 89],
        row9: [91, 92, 93, 94, 95, 96, 97, 98, 99]
      }
    }
  }
  
  renderSquare(item, row) {
    return item.map(num => {
      let grid;
      let squareValue = item.indexOf(num);
      let stuff = this.state.items[row].indexOf(num);
      
      if (item == this.state.items.row3) {
        grid = 'square-3';
      }
      else if (item == this.state.items.row6) {
        grid = 'square-6'
      }
      
      return (
        <div className={"square " + grid} id={"square-" + num}>
          {console.log(stuff)}
          <input 
            type="number"
            value={item[squareValue]}
            onChange={(event => this.setState({stuff: event.target.value}))}
            />
        </div>  
      )
    })
  }
  
  render() {
    return (
      <div>
        {this.renderRows()}
      </div>
    )
  }
};