import React, { Component } from 'react';

import ToDoList from "./todolist.js";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <ToDoList />
        </div>
    );
  }
}
