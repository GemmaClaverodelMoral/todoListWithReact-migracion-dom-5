import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useToDos() {

    const {
        item: listaToDos, //se renombra
        saveItem: saveToDos,
        sincronizeItem: sincronizeToDos,
        loading,
        error,
    } = useLocalStorage('ToDos_V2', [])
      
    const [toDoSearch, setToDoSearch] = React.useState('')
    
    const totales = listaToDos.length // cantidad de ToDos
    const completados = listaToDos.filter( //cantidad de ToDos completados (filtro)
      (toDo) => !!toDo.completed).length 
    
    let fraseCounter = ""
    if (completados === totales){
          fraseCounter = `No tienes To DO's pendientes`
    } else {fraseCounter = `Has completado ${completados} de ${totales} tareas.`}
    const listaFiltradaToDos = listaToDos.filter( // Devuelve la lista de los Items filtrados por el search
        (toDo) => {
          const toDoText = toDo.text.toLowerCase()
          const searchText = toDoSearch.toLowerCase()
          return toDoText.includes(searchText)
        }
    )
    
    function addToDo (text)          { // agrega nuevo ToDo a la lista de Todos
      const id = newToDoId(listaToDos)
      const listaToDosActualizada = [...listaToDos]
      listaToDosActualizada.push({
        id,
        text, 
        completed: false
      }) 
      saveToDos(listaToDosActualizada)
    }

    function getToDo (id) {
      const todoIndex = listaToDos.findIndex(todo => todo.id === id);
      return listaToDos[todoIndex];
    }

    function editToDo (id, newText)  { // Actualiza toDo cuyo id=id con text = newText
      const index = listaToDos.findIndex( (toDo) => toDo.id === id)
      const listaToDosActualizada = [...listaToDos]
      listaToDosActualizada[index].text = newText;
      saveToDos(listaToDosActualizada)
    }

    function deleteToDo (id)         { // Actualiza el estado eliminando el Item 
      const index = listaToDos.findIndex( (toDo) => toDo.id === id)
      const listaToDosActualizada = [...listaToDos]
      listaToDosActualizada.splice(index, 1);
      saveToDos(listaToDosActualizada)
    }
    
    function toggleToDoCompleted (id){ // Actualiza el estado con el Item que se completo o descompleto  
        const listaToDosActualizada = [...listaToDos]
        const index = listaToDosActualizada.findIndex( (toDo) => toDo.id === id)
        listaToDosActualizada[index].completed =  !listaToDosActualizada[index].completed;
        saveToDos(listaToDosActualizada)
    }

    const state = { // el orden es importante. Debe ser el mismo en los componentes que llaman a este
      error,
      loading,
      listaFiltradaToDos,
      totales,
      fraseCounter,
      toDoSearch,
      getToDo,
    }
    const stateUpdaters = {
      addToDo,
      editToDo,
      deleteToDo,
      toggleToDoCompleted,
      setToDoSearch,
      sincronizeToDos,
    }
    return {
      state,
      stateUpdaters,        
    }
}
function newToDoId(lista) { // Generar id para addToDO
  if (lista.length === 0) {
    return 1;
  }
  // saca todos los ids de la lista en un areglo que luego se convierte en lista de elementos que se le entrega a Math.max para que nos devuelva en mayor.
  const maxId = Math.max(...lista.map(item => item.id)); 
  
  return maxId + 1;
}
export { useToDos }

// Para borrar el item del localStorage en caso de errores: localStorage.removeItem('ToDos_V2')