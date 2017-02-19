import React, { Component } from 'react';

export default class TasksList extends Component {
    render() {
        console.log(this.props.todos);
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
        )
    }
}