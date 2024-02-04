

import React, { Component } from 'react'

class NewComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            message:"Subscribe to Simplilearn",
            sub: "Subscribe"
        };
    }
    styles ={
        fontStyle: "italic",
        color: "purple"
    }
    Buttonchange = () => { 
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed"
        })
    }
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>
            {this.state.message}
        </h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
      </div>
    )
  }
}

export default NewComp