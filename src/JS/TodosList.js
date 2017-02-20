import React, { Component } from 'react';
import '../styles/TodosList/TodosList.css';

export default class TodosInput extends Component {
        addTask() {
        const alertMessage = document.getElementsByClassName('alert')[0];
        const input = document.getElementsByClassName('add-tasks-field')[0];
        if(input.value.length === 0) {
            alertMessage.style.display = 'block';
        } else {
            input.value = '';
            alertMessage.style.display = 'none';
            const todos = this.props.todos[0].task;
            console.log(todos);
        }
    }
    render() {
        console.log(this.props.todos);
        return (
            <form className='add-tasks-container'>
                <p className='alert'>Please enter a task</p><br/>
                <input type='text' className='add-tasks-field' placeholder='Waht do you need to do?'/>
                <input type='button' className='add-tasks-btn' onClick={ this.addTask } value='+'/>
            </form>
        );
    };

}