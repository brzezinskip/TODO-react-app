import React, { Component } from 'react';
import '../styles/TODOList.css';

export default class TodosList extends Component {
    render() {
        return (
            <div className='add-tasks-container'>
                <input type='text' placeholder='Tasks Field'>
                <input type='button' value='Add Task'>
            </div>
        );
    }
};