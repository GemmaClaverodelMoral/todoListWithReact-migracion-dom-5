import './CreateToDoButton.css'
import React from 'react'

function CreateToDoButton({ setOpenModal}) {
  
    return (
       <button 
          className="CreateToDoButton" 
          onClick={
            () => {
              setOpenModal(state => !state) // Cambia el state entre true y false
            }
          }
        >+</button>
    )
  }

// eslint-disable-next-line import/no-anonymous-default-export
export { CreateToDoButton }