import React, { useEffect } from 'react';  // Línea añadida
import { useNavigate, useLocation } from 'react-router-dom';  // Modificado para incluir useLocation
import { useToDos } from '../useToDos';
import { ToDoItem } from '../../ui/ToDoItem';
import { ToDoCounter } from '../../ui/ToDoCounter';
import { ToDoSearch } from '../../ui/ToDoSearch';
import { ToDoHeader } from '../../ui/ToDoHeader';
import { ToDoList } from '../../ui/ToDoList';
import { ToDosLoading } from '../../ui/ToDosLoading';
import { ToDosError } from '../../ui/ToDosError';
import { ToDosEmpty } from '../../ui/ToDosEmpty';
import { ToDosEmptySearch } from '../../ui/ToDosEmptySearch';
import { CreateToDoButton } from '../../ui/CreateToDoButton';
import { ChangeAlert } from '../../ui/ChangeAlert';

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();  // Línea añadida

  const { state, stateUpdaters } = useToDos();

  const { 
    error,
    loading,
    listaFiltradaToDos,
    totales,
    fraseCounter,
    toDoSearch
  } = state;

  const {
    deleteToDo,
    toggleToDoCompleted,
    setToDoSearch,
    sincronizeToDos
  } = stateUpdaters;

  // Extract search param from URL
  useEffect(() => {  // useEffect añadido
    const params = new URLSearchParams(location.search);
    const search = params.get('search') || '';
    setToDoSearch(search);
  }, [location.search, setToDoSearch]);

  const handleSearchChange = (searchText) => {  // Función handleSearchChange añadida
    setToDoSearch(searchText);
    navigate(`/?search=${searchText}`);
  };

  return ( 
    <>
      {/*Counter & Search Input*/}
      <ToDoHeader loading={loading}> 
          <ToDoCounter 
              fraseCounter={fraseCounter}/>
          <ToDoSearch 
              toDoSearch={toDoSearch} 
              setToDoSearch={handleSearchChange}  // Modificado para usar handleSearchChange
              loading={loading}
          />
      </ToDoHeader>
    
      {/*lista de ToDo's y todas sus exepciones*/}
      <ToDoList 
          error={error}
          loading={loading}
          listaFiltradaToDos={listaFiltradaToDos}
          totalToDos={totales}
          toDoSearch={toDoSearch}
          onError={() => <ToDosError />}
          onLoading={() => <ToDosLoading />}
          onEmptyToDos={() => <ToDosEmpty />}
          onEmptySearch={() => <ToDosEmptySearch toDoSearch={toDoSearch} />}
      > 
          {toDo => (
            <ToDoItem 
              key={toDo.id} 
              text={toDo.text}
              completed={toDo.completed}
              onComplete={() => toggleToDoCompleted(toDo.id)}
              onDelete={() => deleteToDo(toDo.id)}
              onEdit={() => navigate(`/edit/${toDo.id}`, { state: toDo.text })}
            />
          )}
      </ToDoList>
      <CreateToDoButton
          onClick={() => navigate('/new')}
      />
      
      {/* Alerta emergente en caso de cambio en base de datos en otra pantalla*/}
      <ChangeAlert 
          sincronize={sincronizeToDos}  
      />
    </>
  );
}
export { HomePage };
ToDoSearch.js
jsx
Copiar código
import React from 'react';
import './ToDoSearch.css';
import { SearchIcon } from './SearchIcon';

function ToDoSearch({ toDoSearch, setToDoSearch, loading }) {  // Modificado para aceptar props
    return (
      <div className="ToDoSearch-container">
         <SearchIcon />
         <input 
            id="todo-search"
            placeholder='Buscar To DO'
            className="ToDoSearch"
            disabled={loading} // si loading = true desabled = true
            value={toDoSearch} // El valor guardado en el State de React
            onChange={(event) => {
               setToDoSearch(event.target.value);  // Modificado para usar setToDoSearch
            }}
         />
      </div>
    );
}

export { ToDoSearch };
useToDos.js
Asegúrate de que useToDos ya esté configurado para inicializar y actualizar el estado toDoSearch correctamente. Aquí no necesitas hacer cambios específicos para manejar la URL, ya que esto se hace en el componente HomePage.

Explicación Adicional
HomePage.js

Importa useLocation y useEffect para manejar los parámetros de la URL.
Usa useEffect para actualizar toDoSearch basado en el parámetro de búsqueda de la URL.
Crea la función handleSearchChange para actualizar toDoSearch y la URL simultáneamente.
ToDoSearch.js

Modifica el componente para aceptar y usar setToDoSearch y toDoSearch como props.
Con estas modificaciones, tu aplicación ahora actualizará la URL con el texto de búsqueda y podrá inicializarse correctamente con el texto de búsqueda desde la URL.










ChatGPT puede comete