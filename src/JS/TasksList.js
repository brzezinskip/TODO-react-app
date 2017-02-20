import React, { Component } from 'react';
import TodosInput from './TodosList';
import TasksListHeader from './TasksListHeader'

export default class TasksList extends Component {
    changeTaskColor(event) {
        const eventTarget = event.target;
        if(eventTarget.style.color === 'green') {
            eventTarget.style.color = '#000';
        } else {
            eventTarget.style.color = 'green';
            eventTarget.style.fontWeight = 'normal';
        }
    }
    render() {
        const todos = this.props.todos.map(todo =>
            <tr class='tasks-table-row'>
                <td>
                    <p onClick={ this.changeTaskColor} className='tasks-table-txt'>{ todo.task }</p>
                </td>
                <td>
                    <input type='button' className='tasks-table-btn' value='Delete'/>
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