import React from 'react'
import './ToDoSearch.css'

function ToDoSearch({toDoSearch,setToDoSearch, loading})
{
    return (
 
       <input 
          id="todo-search"
          placeholder = { loading ? '' : 'Buscar To DO' } // si esta cargando muestra cadena vacia.
          className = "ToDoSearch"
          disabled = { loading }
          value = { toDoSearch } // El valor guardado en el State de React
          onChange = { (event) => {
            setToDoSearch(event.target.value)
       }}/>
     
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export { ToDoSearch }
