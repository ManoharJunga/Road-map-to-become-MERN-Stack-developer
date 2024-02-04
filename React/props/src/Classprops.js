import React, { Component } from 'react'

class Classprops extends Component {
  render() {
    return (
      <h1>Hello {this.props.name} you are from {this.props.place}</h1>
    )
  }
}

export default Classprops