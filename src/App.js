import React, { Component } from 'react';
import logo from './styles/logo.svg';
import './styles/App.css';
import TodosList from './TodosList'

const todos = [
  {
    task: 'Write working App',
    isCompleted: false  
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
];

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
