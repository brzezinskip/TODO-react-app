import React, { Component } from 'react';
import logo from './styles/logo.svg';
import './styles/App.css';
import TodosList from './TODO/TODOList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODO React App</h2>
        </div>
        <TodosList />
      </div>
    );
  }
}

export default App;
