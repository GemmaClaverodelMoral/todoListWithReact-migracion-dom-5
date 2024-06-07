import React from "react";

function useStorageListener(sincronize) {

    const [storageChange, setStorageChange] = React.useState(false)
    
    window.addEventListener('storage', (change) => { //escuchamos si hay cambio en el storage
        if (change.key === 'ToDos_V2'){
            setStorageChange(true)
        }
    })

    function toogleShow () { //Pasar funcion al prop toogleShow + el prop.sincronize 
        sincronize()
        setStorageChange(false)
    }

    return {
        show : storageChange,
        toogleShow,
    }
}

export { useStorageListener }