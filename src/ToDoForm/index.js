import React from "react";
import "./ToDoForm.css";

function ToDoForm ( {addToDo, setOpenModal}) {
    const [newToDo, setNewToDo] = React.useState('')

    function onSubmit(event) { //     : se manda el newTodo a addToDo. Cerrar el form ?
        event.preventDefault()
        addToDo(newToDo)
        setOpenModal(false)
    }

    function onCancel() { //click en boton cancelar :Cerrar el form
        setOpenModal(false)
    }

    function onChange(event) { //texto que cambia en textarea : Actualiza el valor del estado de nuevo todo
        setNewToDo(event.target.value)
    }

    return (
        <form onSubmit={ onSubmit }
        >
            <label className="todoform-label">Escribe tu nuevo To DO</label>
            <textarea 
                placeholder="Descripción de la tarea ToDo a realizar"
                value={ newToDo }
                onChange={ onChange } 
            />
            <div className="todoform-button-container">
                <button 
                    type="button" 
                    className="todoform-button todoform-button--cancel"
                    onClick={ onCancel }
                    >Cancelar
                </button>
                <button 
                    type= "submit" 
                    className="todoform-button todoform-button--add"
                    onClick={ onSubmit }
                    >Añadir
                </button>
            </div>

        </form>
    )
}

export {ToDoForm}