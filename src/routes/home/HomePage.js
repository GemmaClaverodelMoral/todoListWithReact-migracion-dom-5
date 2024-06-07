import React                from 'react';
import { useNavigate }      from 'react-router-dom';
import { useToDos }         from '../useToDos'
import { ToDoItem }         from '../../ui/ToDoItem'
import { ToDoCounter }      from '../../ui/ToDoCounter'
import { ToDoSearch }       from '../../ui/ToDoSearch'
import { ToDoHeader}        from '../../ui/ToDoHeader'
import { ToDoList }         from '../../ui/ToDoList'
import { ToDosLoading }     from '../../ui/ToDosLoading'
import { ToDosError }       from '../../ui/ToDosError'
import { ToDosEmpty }       from '../../ui/ToDosEmpty'
import { ToDosEmptySearch } from '../../ui/ToDosEmptySearch'
import { CreateToDoButton } from '../../ui/CreateToDoButton'
import { ChangeAlert }      from '../../ui/ChangeAlert'  

function HomePage() {
  const navigate = useNavigate()

  const { 
    state, 
    stateUpdaters
  } = useToDos();

  const { //desestructurar state
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
  } = stateUpdaters

  return ( 
    <>
      {/*Counter & Search Input*/}
      <ToDoHeader loading={loading}> 
          <ToDoCounter 
              fraseCounter={fraseCounter}/>
          <ToDoSearch 
              toDoSearch={toDoSearch} 
              setToDoSearch={setToDoSearch} />
      </ToDoHeader>
    
      {/*lista de ToDo's y todas sus exepciones*/}
      <ToDoList 
          error=              {error}
          loading=            {loading}
          listaFiltradaToDos= {listaFiltradaToDos}
          totalToDos=         {totales}
          toDoSearch=         {toDoSearch}
          onError=        { () => <ToDosError /> }
          onLoading=      { () => <ToDosLoading /> }
          onEmptyToDos=   { () => <ToDosEmpty /> }
          onEmptySearch = { () => <ToDosEmptySearch toDoSearch={toDoSearch} /> }
      > 
          {toDo => (<ToDoItem 
                        key={toDo.id} 
                        text={toDo.text}
                        completed={toDo.completed}
                        onComplete={() => toggleToDoCompleted(toDo.id)}
                        onDelete={() => deleteToDo(toDo.id)}
                        onEdit={() => navigate(`/edit/${toDo.id}`, {state:  toDo.text })}
                    />
          )}
      </ToDoList>
      <CreateToDoButton
          onClick = {() => navigate('/new')}
      />
      
      {/* Alerta emergente en caso de cambio en base de datos en otra pantalla*/}
      <ChangeAlert 
          sincronize={sincronizeToDos}  
      />
    </>
  )
}
export  { HomePage };

// Abreviaturas : 
// Ctrl +K +C: Comentar todo el codigo marcado
// Crtl +K +U: Descomentar todo el codigo marcado
// Ctrl D: para marcar todos los textos iguales
// Alt flecha arriba o abajo para mover una linea 
