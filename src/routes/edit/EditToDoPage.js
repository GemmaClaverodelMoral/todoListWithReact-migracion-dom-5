import React from "react";
import { useParams,
    useLocation }   from "react-router-dom";
import { ToDoForm}  from '../../ui/ToDoForm'
import { useToDos } from "../useToDos";

function EditToDoPage() {
    let { id }  = useParams();
    id = Number(id)

    const { state, stateUpdaters } = useToDos()
    const { loading, getToDo} = state
    const { editToDo } = stateUpdaters

    // Definir el texto del toDo a editar:
    // Si se accede a la pagina de edit desde URL directo, 
    // se carga del LocalStorage esperando(simulando) el tiempo de carga: loading
    // Si se accede desde navigate de homepage, se obtiene el texto del state de navigate
    const location = useLocation();

    let previousText;
    if (location.search) {
        const params = new URLSearchParams(location.search)
        previousText  = params.get('text');
    } else if (loading) {
        return <p>Cargando...</p>
    } else {
        const toDo = getToDo(Number(id));
        previousText = toDo.text;
    }

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