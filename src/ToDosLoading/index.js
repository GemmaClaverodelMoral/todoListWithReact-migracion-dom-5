import React from 'react';
import './ToDosLoading.css';

const ToDosLoading = () => {
  return (
    <div className="ToDosLoading-container">
      <span className="ToDosLoading-completeIcon"></span>
      <p className="ToDosLoading-text"></p>
      <span className="ToDosLoading-deleteIcon"></span>
    </div>
  );
}

export { ToDosLoading };