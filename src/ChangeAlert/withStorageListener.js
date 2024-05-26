import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false)
        
        window.addEventListener('storage', (change) => {
            if (change.key === 'ToDos_V1'){
                setStorageChange(true)
            }
        })
        return (
            <WrappedComponent 
                show={ storageChange }
                toogleShow={ setStorageChange }
            />
        )
    }
}

export { withStorageListener }