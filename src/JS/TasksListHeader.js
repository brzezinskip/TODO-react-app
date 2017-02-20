import React, { Component } from 'react';

export default class TasksList extends Component {
    render() {
        return (
            <thead className='tasks-table-header'>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
        )
    }
}