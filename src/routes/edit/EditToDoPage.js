import React from "react";
import { useParams } from "react-router-dom";
import { ToDoForm} from '../../ui/ToDoForm'
import { useToDos } from "../useToDos";
import { useLocation } from "react-router-dom";


function EditToDoPage() {
    let { id }  = useParams();
    id = Number(id)

    const location = useLocation();
    const previousText = location.state;
    
    const { stateUpdaters } = useToDos()
    const { editToDo } = stateUpdaters

    return (
        <ToDoForm  
            formLabel="Modifica el contenido de tu To DO"
            formButtonText="Modificar"
            previousToDoText={previousText}
            submitEvent={(newText) => editToDo(id, newText)}
        />
    )
}

export { EditToDoPage }