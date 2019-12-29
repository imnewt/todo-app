import React, { Component } from 'react';

import Input from "./components/Input"
import TodoList from "./components/TodoList"

import './App.css';

class App extends Component {
  state = {
    taskList: [
      { id: 1, todo: "Something 1", completed: true },
      { id: 2, todo: "Something 2", completed: false }
    ]
  }

  _handleAddTodo = todo => {
    const newList = [
      ...this.state.taskList,
      { id: this.state.taskList.length + 1, todo, completed: false }
    ];
    this.setState({ taskList: newList });
  };

  // _handleDelete = todo => () => {
  //   const newList = this.state.list.filter(item => item.id !== todo.id);
  //   this.setState({ list: newList });
  // };

  // _handleCheck = id => () => {
  //   const newList = this.state.list.map(todo =>
  //     todo.id === id ? (todo.completed = !todo.completed) : todo
  //   );
  //   this.setState({ list: newList });
  // };

  render() {
    const { taskList } = this.state;
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Input onAdd={this._handleAddTodo}/>
        <TodoList taskList={taskList}/>
      </div>
    );
  }
}

export default App;