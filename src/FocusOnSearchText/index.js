import React, { useEffect } from 'react';

function FocusOnSearchText({ loading, listaFiltradaToDos }) {
  useEffect(() => {
    if (!loading) {
      document.getElementById('todo-search').focus();
    }
  }, [loading, listaFiltradaToDos]);

  return null;
}

export { FocusOnSearchText };
