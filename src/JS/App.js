import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import TodosInput from './TodosList'
import TasksList from './TasksList'

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
  constructor(props) {
    super(props);

    this.state = {
      todos: todos
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODO React App</h2>
        </div>
        <TodosInput />
        <TasksList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
