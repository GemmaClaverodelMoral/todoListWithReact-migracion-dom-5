import React from "react"

function useLocalStorage(itemName,initialValue){ //itemName = 'ToDos_V2', initialValue
  const [state, dispatch] = React.useReducer(reducer,initialState({ initialValue }))

  const { // Destructuracion del state
    sincronizedItem,
    error,
    loading,
    item,
  } = state;

  // ACTION CRESTORS: Se definen las funciones de actualizacion de cada estado

  function onError(error)  {dispatch({ type: actionTypes.error,    payload: error })}
  function onSuccess(item) {dispatch({ type: actionTypes.success,  payload: item  })}
  function onSave(item)    {dispatch({ type: actionTypes.save,     payload: item  })}
  function onSincronize()  {dispatch({ type: actionTypes.sincronize})}

  React.useEffect( () => {  // Informacion guardada en el LocalStorage ? No: Crearla en vacio. SI: recojerla en parceItem despues de parsearla con JSON. Cada vez que requiera sincronizacion

    setTimeout( () => {
      try {
        let localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) { //Si no tiene informacion, se inicializa 
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else { // si tiene informacion, se envia 
          parsedItem = JSON.parse(localStorageItem)
        } 

        onSuccess(parsedItem) 
      } 

      catch(error) {
          onError(error)
      }
    }, 2000)
  }, [sincronizedItem])

  function saveItem(newItem) { //Agrega nuevo item a Local Storage
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))  
      onSave(newItem)
    } catch(error) {
      onError(error)
    }
  }

  function sincronizeItem(){ //recarga todo y avisa que ya se hizo
    onSincronize()      
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    sincronizeItem,
  }
}
const  initialState = ({ initialValue }) => ({ //Si se hace como function: Se necesita usar return para devolver el objeto
  sincronizedItem: true,
  loading: true,
  error: false,
  item: initialValue,
});

const actionTypes = {
  error:      'ERROR',
  success:    'SUCCESS',
  save:       'SAVE',
  sincronize: 'SINCRONIZE',
}

const reducerObject = (state, payload) => ({ 
  [actionTypes.error]: {
    ...state, 
    error: true, 
  },
  [actionTypes.success]: {
    ...state,
    error: false, //logicamente
    loading: false, //ya terminamos de cargar
    sincronizedItem: true,
    item: payload, 
  },
  [actionTypes.save]: {
    ...state, 
    item:  payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true, //para simular estado de carga mientras se hace sincronizacion
  },
})

function reducer (state, action) {
  return reducerObject(state, action.payload)[action.type] || state
}

export { useLocalStorage }
