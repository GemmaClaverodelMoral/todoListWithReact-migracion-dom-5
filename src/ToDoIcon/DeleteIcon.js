import React from "react";
import { ToDoIcon } from '.'

function DeleteIcon( { onDeleted }){
    return (
        <ToDoIcon 
            type="delete"
            color="gray"
            onClick={onDeleted}
        />
    )
}

export { DeleteIcon }