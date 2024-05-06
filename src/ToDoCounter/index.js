import './ToDoCounter.css';
import { ToDoCounterLoading } from '../ToDoCounterLoading';
import React from 'react';
import { ToDoContext } from '../ToDoContext';

function ToDoCounter() {
    const {
        loading,
        fraseCounter,
    } = React.useContext(ToDoContext)
    return (
        <h1 className="ToDoCounter">
            {loading && <ToDoCounterLoading />} 
            {!loading && fraseCounter}
        </h1> 
    )
  }

export { ToDoCounter }