import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap"

import shortid from "shortid"

import Input from "./components/Input"
import TodoList from "./components/TodoList"

import './App.css';

class App extends Component {
  state = {
    todoList: [
      { id: "23TplPdS", todo: "Something 1", completed: true },
      { id: "2WEKaVNO", todo: "Something 2", completed: false }
    ]
  }

  _handleAddTodo = todo => {
    const newList = [
      ...this.state.todoList,
      { id: shortid.generate(), todo, completed: false }
    ];
    this.setState({ todoList: newList });
  };

  _handleDelete = todo => () => {
    const newList = this.state.todoList.filter(item => item.id !== todo.id);
    this.setState({ todoList: newList });
  };

  // Not finished yet
  _handleCheck = id => () => {
    const newList = this.state.todoList.map(todo =>
      todo.id === id ? (todo.completed = !todo.completed) : todo
    );
    this.setState({ todoList: newList });
  };

  render() {
    const { todoList } = this.state;
    return (
      <Container className="App">
        <Row>
          <Col sm={12} className="text-center">
            <h1>Todo App</h1>
            <Input
              onAdd={this._handleAddTodo}/>
            <TodoList 
              todoList={todoList}
              onDel={this._handleDelete}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;