import './ToDosEmpty.css'
import React from 'react';

function ToDosEmpty() {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        setIsVisible(true); // Cambiar a true cuando desees mostrar el mensaje
    }, []);
    return (
       <p className={`p-mensaje ${isVisible ? 'mostrar' : ''}`}>Crea ToDo's con el boton azul</p>
    )
}

export { ToDosEmpty }