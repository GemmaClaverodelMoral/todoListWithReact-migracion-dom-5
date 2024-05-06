import React from 'react'
import './ToDoSearch.css'
import { ToDoContext } from '../ToDoContext';

function ToDoSearch()
{
  const {
    toDoSearch,
    setToDoSearch,
} = React.useContext(ToDoContext)
    return (
       <input 
          placeholder = "Buscar To DO" 
          className = "ToDoSearch"
          value = {toDoSearch} // El valor guardado en el State de React
       onChange={(event) => {
            setToDoSearch(event.target.value)
       }}/>
    )
  }

// eslint-disable-next-line import/no-anonymous-default-export
export { ToDoSearch }