import React from 'react';
import './ToDosLoading.css';

const ToDosLoading = () => {
  return (
    <div className="ToDosLoading-container">
      <span className="ToDosLoading-completeIcon"></span>
      <span className="ToDosLoading-editIcon"></span>
      <span className="ToDosLoading-deleteIcon"></span>
      <p className="ToDosLoading-text"></p>
      
    </div>
  );
}

export { ToDosLoading };