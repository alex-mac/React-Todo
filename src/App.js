import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List/list';

class App extends Component {
  render() {
    return (
      <div className="list">
        <input type="text" />
        <List />
      </div>
    );
  }
}

export default App;
