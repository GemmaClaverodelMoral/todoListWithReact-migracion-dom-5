import React from "react"

function useLocalStorage(itemName,initialValue){ 
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true) 
    const [error, setError] = React.useState(false) 
  
      React.useEffect( () => {  // Informacion guardada en el LocalStorage ? No: Crearla en vacio. SI: recojerla en parceItem despues de parsearla con JSON  
        setTimeout( () => {
          try {
            let localStorageItem = localStorage.getItem(itemName)
            let parsedItem

            if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
            } else {
              parsedItem = JSON.parse(localStorageItem)
              setItem(parsedItem)
            } 
            setLoading(false)
          } 
          catch(error) {
              setLoading(false)
              setError(true)
          }
        }, 3000)
      }, [])
    
    
    const saveItem = (itemActualizado) => {
      localStorage.setItem(itemName, JSON.stringify(itemActualizado))  
      setItem(itemActualizado)
    }
    return {
      item, 
      saveItem,
      loading,
      error,
    }
  }
  export { useLocalStorage }

// Estas lineas se insertan en la consola para hacer pruebas cuando se necesitan tareas
//
// localStorage.removeItem('ToDos_V1')
// const defaultToDos = [
//   {text: "Hacer Ejercicio", completed: true},
//   {text: "Acabar el curso de React", completed: false},
//   {text: "Cocinar", completed: false},
//   {text: "Hacer algo de la casa", completed: true},
// ]
// localStorage.setItem('ToDos_V1', JSON.stringify(defaultToDos))

// Estado creado para verificar estado de carga de peticiones lentas
// Estado para verificar estados de error
// Hook para encapsular acciones del uso de LocalStorage