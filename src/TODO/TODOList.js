import React, { Component } from 'react';
import React from 'react';
import '../styles/TODOList.css';

class TodosList extends React.Component {
    render(){
        return (
            <div className='add-tasks-container'>
                <input type='text' placeholder='Tasks Field'>
                <input type='button' value='Add Task'>
            </div>
        )
    }
}