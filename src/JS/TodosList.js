import React, { Component } from 'react';
//import '../styles/TODOList.css';

export default class TodosInput extends Component {
    render() {
        return (
            <div className='add-tasks'>
                <input type='text' placeholder='Tasks Field'/>
                <input type='button' value='Add Task'/>
            </div>
        );
    };
}