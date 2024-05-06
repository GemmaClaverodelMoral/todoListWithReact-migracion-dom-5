import React from "react";
import "./ToDoForm.css";
import { ToDoContext } from "../ToDoContext";

function ToDoForm () {
    const {
        addToDo,
        setOpenModal} = React.useContext(ToDoContext)
    const [newToDo, setNewToDo] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addToDo(newToDo)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
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