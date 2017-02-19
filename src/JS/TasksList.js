import React, { Component } from 'react';
import TodosInput from './TodosList';
import TasksListHeader from './TasksListHeader'

export default class TasksList extends Component {
    render() {
        console.log(todos);
        const todos = this.props.todos.map(todo => 
        <td className='tasks-list' key={ todo.index }>
                <todo
                    todo={ todo.task }
                    isCompleted={ false }
                />
            </td>
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