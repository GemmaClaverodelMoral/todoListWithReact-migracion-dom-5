

import React from 'react';
import { AppUi } from './AppUi';
import { ToDoProvider } from '../ToDoContext';

function App() {
  return ( 
    <ToDoProvider>
      <AppUi/>
    </ToDoProvider>
  )
}
export default App;

// Abreviaturas : 
// Ctrl +K +C: Comentar todo el codigo marcado
// Crtl +K +U: Descomentar todo el codigo marcado
// <toDoCounter> - ACTUALIZAR
// <toDoSearch>
// Me entrega un arreglo con las tareas cuyo text coincida total o parcialmente con el string entrado en
// Me entrega un numero con la cantidad de Tareas competadas para
// MARCAR TO DO's como completados
// <toDoList> <span>V
// En caso de click en el span, actualiza a completed el atributo de la tarea que se completó
// BORRAR TO DO's con el span de la X
// <toDoList> <span>X
// En caso de click enel span X, se hace delete de la tarea cuyo index coincida con la X
// INSERTAR To DO's con el click en el boton + y el literal que se haya introducido en el <toDoSearch>
// <CreateToDoButton>
// En caso de click en el Button, se inserta un nuevo ToDO al array de ToDo's

//toDoBuscado, y ajustarToDoBuscado son las variables que se van a guardar en el State de react
//Se inicializa con un string vacio porque correspon a la valiable input que es string.
//console.log("Los usuarios buecan To DO's siguientes: " + toDoBuscado)

//Readme:

// Permite busqueda parcial o totalmente las actividades "To Do" sin tener que coincidir las mayusculas o minusculas.
// Uso de React y componentes para cada uno de los elementos 

//Volver a llenar el localstorage para hacer pruebas

// Vaciar el local Storage
//localStorage.removeItem('ToDos_V1')

// Esto era lo que se le mandaba de props al AppUI antes de desarrollar el context.
// loading = {loading}
// error = {error}
// toDoSearch = {toDoSearch}
// setToDoSearch = {setToDoSearch}
// fraseCounter = {fraseCounter(listaToDos)}
// listaFiltradaToDos = {listaFiltradaToDos}
// setToDoCompleted = {setToDoCompleted}
// setToDoDeleted = {setToDoDeleted}