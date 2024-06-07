import './ToDoCounter.css';
import { ToDoCounterLoading } from '../ToDoCounterLoading';
import React from 'react';

function ToDoCounter({loading, fraseCounter}) {
    return (
        <h1 className="ToDoCounter">
            {loading && <ToDoCounterLoading />} 
            {!loading && fraseCounter}
        </h1> 
    )
  }

export { ToDoCounter }