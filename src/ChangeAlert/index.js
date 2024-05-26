import React from "react";
import { withStorageListener } from "./withStorageListener"

function cargarPagina(){
    return null
}

function ChangeAlert({ show, toogleShow }) {
    console.log('show',show)
    console.log('toogleShow',toogleShow)
    if (show) {
        return  (
        <div>
            <p>Hubo cambios... pilas - Recarga</p>
            <button 
                onClick={cargarPagina}>
                Cargar pagina
            </button>
        </div>
        )
        
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }