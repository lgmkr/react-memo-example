import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComp from './components/functionalComp'

class App extends Component {
  state = {
    val: 1
  }
  componentDidMount =() =>{
    setInterval(() => {
      this.setState({val: 1})
    }, 1000)
  }
  render() {
    const {val} = this.state
    return (
      <div className="App">
        <header className="App-header">
         <FunctionalComp val={val}></FunctionalComp>
        </header>
      </div>
    );
  }
}

export default App;
