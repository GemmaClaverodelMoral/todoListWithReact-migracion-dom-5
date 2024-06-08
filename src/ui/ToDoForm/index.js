import React from "react";
import { useHistory } from "react-router-dom";
import "./ToDoForm.css";

function ToDoForm ( props ) {
    const history = useHistory()
    const [toDoText, setToDoText] = React.useState(props.previousToDoText)
   

    function onSubmit(event) { //     : se manda el newTodo a addToDo.
        event.preventDefault()
        props.submitEvent(toDoText)
        history.push('/')
    }

    function onCancel() { //click en boton cancelar :Cerrar el form
        history.push('/')
    }

    function onChange(event) { //texto que cambia en textarea : Actualiza el valor del estado de nuevo todo
        setToDoText(event.target.value)
    }

    return (
        
        <form onSubmit={ onSubmit }
        >
            <label className="todoform-label">{props.formLabel}</label>
            <textarea 
                value={ toDoText }
                onChange={ onChange } 
                placeholder= "Descripción del ToDo"
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
                    >{props.formButtonText}
                </button>
            </div>

        </form>
    )
}

export { ToDoForm }