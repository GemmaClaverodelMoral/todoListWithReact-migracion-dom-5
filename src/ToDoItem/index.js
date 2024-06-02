import './ToDoItem.css'
import { CompleteIcon } from '../ToDoIcon/CompleteIcon'
import { DeleteIcon } from '../ToDoIcon/DeleteIcon'

function ToDoItem(props) {
    return (
        <li className="ToDoItem">
            <CompleteIcon 
                completed = {props.completed} 
                onToggleComplete = {props.onCompleted}
            />
            <p 
                className={`ToDoItem-p ${props.completed &&"ToDoItem-p--complete"}`}>{props.text}
                
            </p>
            <DeleteIcon 
                onDeleted = {props.onDeleted}
            />
        </li>
    )
  }
// {``}: para clases dinamicas
export { ToDoItem }

/*
    <span 
        className="Icon Icon-delete"
        onClick = {props.onDelete}>
        X
    </span>

    <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick = {props.onCompleted}> 
        <i className="fas fa-check"></i>
    </span>}
*/