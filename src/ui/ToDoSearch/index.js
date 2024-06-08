import React from 'react'
import './ToDoSearch.css'
import { SearchIcon } from './SearchIcon';

function ToDoSearch({toDoSearch, handleSearchChange, loading}) {

    return ( 
      <div className="ToDoSearch-container">
         <SearchIcon />
         <input 
            id="todo-search"
            placeholder='Buscar To DO'
            className="ToDoSearch"
            disabled={loading}
            value={toDoSearch}
            onChange={(event) => {
               handleSearchChange(event.target.value); 
         }}
         />
      </div>
    );
}

export { ToDoSearch }
