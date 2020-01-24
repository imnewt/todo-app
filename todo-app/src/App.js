import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap"

import shortid from "shortid"

import Input from "./components/Input"
import TodoList from "./components/TodoList"

import './App.css';

class App extends Component {
  state = {
    todoList: [
      { id: "23TplPdS", todo: "Something 1", isComplete: true },
      { id: "2WEKaVNO", todo: "Something 2", isComplete: false }
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

  // _handleCheck = todo => () => {
  //   const newList = this.state.todoList.map(item =>
  //     item.id === todo.id ? (item.isComplete = !item.isComplete) : item
  //   );
  //   this.setState({ todoList: newList });
  //   console.log('seucc')
  // };

  _handleCheck = (todo) => () => {
      const isComplete = todo.isComplete;
      const {todoList: test} = this.state;
      const index = test.indexOf(todo);
      this.setState({
        todoList: [
          ...test.slice(0,index),
          {
            ...todo,
            isComplete: !isComplete
          },
          ...test.slice(index+1)
        ]
      })
      console.log(this.state.todoList)
    
  }

  // HAPPY LUNAR NEW YEAR

  render() {
    const { todoList } = this.state;
    return (
      <Container className="App">
        <Row className="main-container">
          <Col xs={12} className="text-center">
            <h1>Todo App</h1>
            <Input
              onAdd={this._handleAddTodo}/>
            <TodoList 
              todoList={todoList}
              onDel={this._handleDelete}
              onCheck={this._handleCheck}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;