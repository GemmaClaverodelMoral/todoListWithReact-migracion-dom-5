import './ToDosEmptySearch.css'
import React from 'react';

function ToDosEmptySearch({toDoSearch}) {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        setIsVisible(true); // Cambiar a true cuando desees mostrar el mensaje
    }, []);
    return (
       <p className={`p-mensaje ${isVisible ? 'mostrar' : ''}`}>{`No hay resultados para: ${toDoSearch}`} </p>
    )
}

export { ToDosEmptySearch }