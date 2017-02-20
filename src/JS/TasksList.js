import React, { Component } from 'react';
import TodosInput from './TodosList';
import TasksListHeader from './TasksListHeader'

export default class TasksList extends Component {
    changeTaskColor(event) {
        event.target.style.color = 'green';
    }
    render() {
        const todos = this.props.todos.map(todo =>
            <tr>
                <td>
                    <p onClick={ this.changeTaskColor}>{ todo.task }</p>
                </td>
                <td>
                <input type='button' value='Delete'/>
                </td>
            </tr>
        );
        return (
            <table>
                <TasksListHeader />
                <tbody>
                    { todos }
                </tbody>
            </table>
        )
    }
}