
import React, { useState, useEffect } from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ sincronize }) {
    const { show, toogleShow } = useStorageListener(sincronize)
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(show);
    }, [show]);

    return show ? (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
            <p className={`p-mensaje-recarga ${isVisible ? 'mostrar' : ''}`}>
                Cargar página para ACTUALIZAR cambios efectuados en otra ventana activa
            </p>
            <button
                className="TodoForm-button TodoForm-button--add" 
                onClick={toogleShow}>
                Recargar
            </button>
        </div>
      </div>
    ) : null;
}



export { ChangeAlert }