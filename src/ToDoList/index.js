import './ToDoList.css'

function ToDoList(props) {
    return (
        <ul className='ToDoList'>
            {props.children}
        </ul>
    )
  }

export { ToDoList }