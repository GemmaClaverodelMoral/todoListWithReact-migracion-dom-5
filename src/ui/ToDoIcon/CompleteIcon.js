import React from "react";
import { ToDoIcon } from '.'

function CompleteIcon( { completed, onToggleComplete }) {
    return (
        <ToDoIcon 
            type="check"
            color= { completed ? '#a0f905' : 'gray'}
            onClick={onToggleComplete}
         />
    )
}

export { CompleteIcon }