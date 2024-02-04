import React from 'react'
import './App.css';
import NewComp from './NewComp';



class App extends React.Component {
  styles = {
    color: "red",
    textStyle: "bold"
  };
  render(){
  return (
    <div className="App">
      <h2 style={this.styles}>Hello world</h2>
      <NewComp />
    </div>
    
  );
  }
}

export default App;
