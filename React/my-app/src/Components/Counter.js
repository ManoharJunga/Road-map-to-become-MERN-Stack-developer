import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    IncrementCount = () => {
        this.setState({count: this.state.count + 1});
    };

  render() {
    const {count} = this.state;
    return (
      <div><button onMouseEnter={this.IncrementCount}>
        incremented to {count}x
        </button></div>
    )
  }
}

export default Counter