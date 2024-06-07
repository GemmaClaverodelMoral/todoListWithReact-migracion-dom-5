import React from "react";
import { ToDoIcon } from './'

function EditIcon( { onEdit }) {
   
    return (
        <ToDoIcon 
            type="edit"
            color= {'gray'}
            onClick= { onEdit }
         />
    )
}

export { EditIcon }