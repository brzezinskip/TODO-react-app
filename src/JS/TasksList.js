import React, { Component } from 'react';
import TodosInput from './TodosList.js';

export default class TasksList extends Component {
    render() {
        console.log(this.props.todos);
        return (
            <table>
                <thead>
                    <th>Tasks</th>
                    <th>Actions</th>
                </thead>
            </table>
        )
    }
}