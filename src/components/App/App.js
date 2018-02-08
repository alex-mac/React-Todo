import React, { Component } from 'react';
import './App.css';
import VisibleTodoList from '../../containers/VisibleTodoList/VisibleTodoList'
import AddTodo from '../../containers/AddTodo/AddTodo'

class App extends Component {
  render() {
    return (
      <div className="list">
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;


