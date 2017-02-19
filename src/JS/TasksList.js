import React, { Component } from 'react';
import TodosInput from './TodosList';
import TasksListHeader from './TasksListHeader'

export default class TasksList extends Component {
    render() {
        console.log(this.props.todos);
        return (
            <table>
                <TasksListHeader />
                <tr>
                    
                </tr>
            </table>
        )
    }
}