import React, { Component } from "react"
import { Button } from "reactstrap"

import "./TodoList.css"

export default class TodoList extends Component {
    state = {
        // taskList: []
    }

    render() {
        const { todoList, onDel } = this.props;
        return (
            <div className="todo-list mt-4">
            {
                todoList.map(todo => <Todo value={todo} onDel={onDel}/>)
            }
            </div>
        )
    }
}

class Todo extends Component {
    render() {
        const { value, onDel } = this.props;
        return (
            <div className="todo">
                <input type="checkbox"/>
                {value.todo}
                <Button onClick={onDel(value)}>x</Button>
            </div>
        )
    }
}