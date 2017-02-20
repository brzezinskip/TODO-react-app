import React, { Component } from 'react';
import TodosInput from './TodosList';
import TasksListHeader from './TasksListHeader'

export default class TasksList extends Component {
    changeTaskColor() {
        console.log(this.innerHTML);
    }
    render() {
        const todos = this.props.todos.map(todo =>
            <tr>
                <td>
                    <p onClick={ this.changeTaskColor}>{ todo.task }</p>
                </td>
                <td>
                <input type='button' value='Done'/>
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