import React from "react";
import { ToDoIcon } from '.'

function CompleteIcon( { completed, onCompleted }) {
    return (
        <ToDoIcon 
            type="check"
            color= { completed ? '#a0f905' : 'gray'}
            onClick={onCompleted}
         />
    )
}

export { CompleteIcon }