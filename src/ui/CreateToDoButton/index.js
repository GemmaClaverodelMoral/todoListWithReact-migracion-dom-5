import './CreateToDoButton.css'
import React from 'react'

function CreateToDoButton(props) {
  
    return (
       <button 
          className="CreateToDoButton" 
          onClick={props.onClick}
        >+
        </button>
    )
  }

// eslint-disable-next-line import/no-anonymous-default-export
export { CreateToDoButton }