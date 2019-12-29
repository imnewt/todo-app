import React, { Component } from "react";

export default class TodoList extends Component {
    state = {
        // taskList: []
    }

    render() {
        const { taskList } = this.props;
        return (
            <div>
                {
                    taskList.map(task => <Todo value={task}/>)
                }
            </div>
        )
    }
}

class Todo extends Component {
    render() {
        const { value } = this.props;
        return (
            <div>
                {value.todo}
            </div>
        )
    }
}