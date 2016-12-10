import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Greet from './Greet';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "World"
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Name onChange={this.handleChange}/>
        <Greet name={this.state.name}/>
      </div>
    );
  }
}

export default App;
