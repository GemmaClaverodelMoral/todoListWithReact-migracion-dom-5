import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext()

function ToDoProvider( { children } ) {
    const {
        item: listaToDos, //se renombra
        saveItem: saveToDos,
        loading,
        error,} = useLocalStorage('ToDos_V1', [])
      
      const [toDoSearch, setToDoSearch] = React.useState('')
      const [openModal, setOpenModal] = React.useState(false)
    
      const totales = listaToDos.length // cantidad de ToDos
      const completados = listaToDos.filter((toDo) => !!toDo.completed).length //cantidad de ToDos completados (filtro)
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
    
      const setToDoCompleted = (text) => { //Actualiza el estado con la lista actualizada con el Item que se completo  
        const listaToDosActualizada = [...listaToDos]
        const index = listaToDosActualizada.findIndex( (toDo) => toDo.text === text)
        listaToDosActualizada[index].completed = true
        saveToDos(listaToDosActualizada)
      }
      const setToDoDeleted = (text) => { // Actualiza el estado con la lista actualizada eliminando el Item que fue eliminado
        const listaToDosActualizada = [...listaToDos]
        const index = listaToDosActualizada.findIndex( (toDo) => toDo.text === text)
        listaToDosActualizada.splice(index, 1);
        saveToDos(listaToDosActualizada)
      }

      const addToDo = (text) => {
        const listaToDosActualizada = [...listaToDos]
        listaToDosActualizada.push({
          text, 
          completed: false}
        ) 
        saveToDos(listaToDosActualizada)
      }
    return (
        <ToDoContext.Provider value= {{
            loading,
            error,
            toDoSearch,
            setToDoSearch,
            fraseCounter,
            listaFiltradaToDos,
            setToDoCompleted,
            setToDoDeleted,
            openModal,
            setOpenModal,
            addToDo,
        }}>
            { children }
        </ToDoContext.Provider>
    )
}
 
export { ToDoContext, ToDoProvider}