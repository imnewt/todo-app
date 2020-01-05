import React, { Component } from "react"
import { Button, Row, Container } from "reactstrap"

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
            // <div className="atodo d-flex">
            //     <div className="todo-container d-flex align-items-center">
            //         <input type="checkbox"/>
            //         <p className="todo">{value.todo}</p>
            //     </div>
            //     <Button color="danger" onClick={onDel(value)}>Delete</Button>
            // </div>
            <Container>
                <Row className="atodo align-items-center">
                    <div className="col-9 col-sm-10 text-left p-0">
                        <label className="todo">{value.todo}
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="col-3 col-sm-2 text-right p-0">
                        <Button className="del-btn" color="danger" onClick={onDel(value)}>Delete</Button>
                    </div>
                </Row>
            </Container>
        )
    }
}