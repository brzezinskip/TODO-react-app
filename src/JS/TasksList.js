import React, { Component } from 'react';
import TodosInput from './TodosList';
import TasksListHeader from './TasksListHeader'

export default class TasksList extends Component {
    render() {
        const todos = this.props.todos.map(todo =>
            <tr id={ todo.task }>
                <td>
                    <p>{ todo.task }</p>
                </td>
                <td>
                <input type='button' onClick={ this.changeTaskColor} value='Done'/>
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
    changeTaskColor(id) {
        document.getElementsByClassName(id)[0].style.color = 'green';
    }
}