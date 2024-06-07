import React from 'react';
import './ToDoCounterLoading.css';

const ToDoCounterLoading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Cargando...</p>
    </div>
  );
}

export { ToDoCounterLoading };