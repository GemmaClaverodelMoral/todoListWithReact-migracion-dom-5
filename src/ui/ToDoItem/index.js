import './ToDoItem.css'
import { CompleteIcon } from '../ToDoIcon/CompleteIcon'
import { DeleteIcon } from '../ToDoIcon/DeleteIcon'
import { EditIcon } from '../ToDoIcon/EditIcon'

function ToDoItem(props) {
    return (
        <li className="ToDoItem">
            <CompleteIcon 
                completed = {props.completed} 
                onToggleComplete = {props.onComplete}
            />
            <EditIcon 
                onEdit = {props.onEdit}
                
            />
            <DeleteIcon 
                onDelete = {props.onDelete}
            />
            <p 
                className={`ToDoItem-p ${props.completed &&"ToDoItem-p--complete"}`}>{props.text}
            </p>
        </li>
    )
  }
// {``}: para clases dinamicas
export { ToDoItem }
