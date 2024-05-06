import React from "react"
import { ToDoItem } from '../ToDoItem';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDosLoading } from '../ToDosLoading';
import { ToDosError } from '../ToDosError';
import { ToDosEmpty } from '../ToDosEmpty';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { ToDoContext } from "../ToDoContext";

function AppUi (){
    const {
        loading,
        error,
        listaFiltradaToDos,
        setToDoCompleted,
        setToDoDeleted,
        openModal,
        setOpenModal,
    } = React.useContext(ToDoContext)
    return (
        <>
            <ToDoCounter />
            <ToDoSearch />
            <ToDoList>
                {error && 
                <ToDosError />}
                {loading && 
                (<>
                <ToDosLoading />
                <ToDosLoading />
                <ToDosLoading />
                </>)
                }
                {(!loading && listaFiltradaToDos.length === 0) && 
                <ToDosEmpty />}
                
                {listaFiltradaToDos.map(toDo => (
                <ToDoItem 
                    key={toDo.text} 
                    text={toDo.text}
                    completed={toDo.completed}
                    onCompleted={() => setToDoCompleted(toDo.text)}
                    onDeleted={() => setToDoDeleted(toDo.text)}
                />
                ))}
            </ToDoList>
            <CreateToDoButton
                setOpenModal = { setOpenModal }
            />
            {openModal && ( 
            <Modal>
                <ToDoForm />
            </Modal>
            )}
        </>
    )
}

export { AppUi }
// en ToDoList
// listaToDos = {listaFiltradaToDos}
// setToDos = {setToDos}

