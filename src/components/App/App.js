import React, { Component } from 'react';
import './App.css';
import VisibleTodoList from '../../containers/VisibleTodoList/VisibleTodoList'
import AddTodo from '../../containers/AddTodo/AddTodo'

class App extends Component {
  render() {
    return (
      <div>
        <h1>A Simple React Todo</h1>

        <div className="list">
          <AddTodo />
          <VisibleTodoList />
        </div>
      </div>
    );
  }
}

export default App;


