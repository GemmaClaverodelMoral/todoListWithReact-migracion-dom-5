 
import {ReactComponent as CheckSVG} from './check.svg'
import {ReactComponent as DeleteSVG} from './delete.svg'
import './ToDoIcon.css'

const iconTypes = {
    "check": (color) => <CheckSVG className='Icon-SVG' fill={color}/>,
    "delete": (color) => <DeleteSVG className='Icon-SVG' fill={color}/>,
}

function ToDoIcon ( {type, color, onClick} ) {
    return (
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}
export { ToDoIcon }

