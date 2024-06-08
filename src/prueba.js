import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ToDoForm } from '../../ui/ToDoForm';
import { useToDos } from '../useToDos';

function EditToDoPage() {

  const location = useLocation();
  const { id } = useParams();

  const { state, stateUpdaters } = useToDos();
  const { loading, getToDo } = state;
  const { editToDo } = stateUpdaters;

  let previousText;
  if (location.state) {
    previousText = location.state;
  } else if (loading) {
    return <p>Cargando...</p>;
  } else {
    const toDo = getToDo(id);
    previousText = toDo.text;
  }

  return (
    <ToDoForm
      formLabel="Modifica el contenido de tu To DO"
      formButtonText="Modificar"
      previousToDoText={previousText}
      submitEvent={(newText) => editToDo(id, newText)}
    />
  );
}

export { EditToDoPage };