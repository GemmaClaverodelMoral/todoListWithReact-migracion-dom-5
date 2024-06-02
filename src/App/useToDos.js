import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useToDos( props ) {

    const {
        item: listaToDos, //se renombra
        saveItem: saveToDos,
        sincronizeItem: sincronizeToDos,
        loading,
        error,
    } = useLocalStorage('ToDos_V1', [])
      
    const [toDoSearch, setToDoSearch] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
    
    const totales = listaToDos.length // cantidad de ToDos
    const completados = listaToDos.filter( //cantidad de ToDos completados (filtro)
      (toDo) => !!toDo.completed).length 
    
    let fraseCounter = ""
    if (completados === totales){
          fraseCounter = `No tienes To DO's pendientes`
    } else {
          fraseCounter = `Has completado ${completados} de ${totales} tareas.`
    }
    
    const listaFiltradaToDos = listaToDos.filter( // Devuelve la lista de los Items filtrados por el search
        (toDo) => {
          const toDoText = toDo.text.toLowerCase()
          const searchText = toDoSearch.toLowerCase()
          return toDoText.includes(searchText)
        }
    )
    
    const toggleToDoCompleted = (text) => {//Actualiza el estado con la lista actualizada con el Item que se completo  
        const listaToDosActualizada = [...listaToDos]
        const index = listaToDosActualizada.findIndex( (toDo) => toDo.text === text)
        listaToDosActualizada[index].completed =  !listaToDosActualizada[index].completed;
        saveToDos(listaToDosActualizada)
    }

    function setToDoDeleted (text) { // Actualiza el estado con la lista actualizada eliminando el Item que fue eliminado
        const listaToDosActualizada = [...listaToDos]
        const index = listaToDosActualizada.findIndex( (toDo) => toDo.text === text)
        listaToDosActualizada.splice(index, 1);
        saveToDos(listaToDosActualizada)
    }

    function addToDo (text) { // agrega nuevo ToDo a la lista de Todos
        const listaToDosActualizada = [...listaToDos]
        listaToDosActualizada.push({
          text, 
          completed: false
        }) 
        saveToDos(listaToDosActualizada)
    }
    const state = { // el orden es importante. Debe ser el mismo en los componentes que llaman a este
      error,
      loading,
      listaFiltradaToDos,
      totales,
      openModal,
      fraseCounter,
      toDoSearch,
    }

    const stateUpdaters = {
      setOpenModal,
      addToDo,
      setToDoDeleted,
      toggleToDoCompleted,
      setToDoSearch,
      sincronizeToDos,
    }

    return {
      state,
      stateUpdaters,        
    }
}
 
export { useToDos }