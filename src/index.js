import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Practica si bajaramos de version a 17.0
// Revisar video clase React intro - 21.Versiones de React 


// ***  PRUEBAS DE High components.
// function App(props) {
//     return (
//         <h1>¡ {props.saludo}, {props.nombre} !</h1>
//     )
// }

// function withSaludo(saludo){
//     return function WrappedComponentWithSaludo(WrappedComponent){
//         return function CompenenteDeVerdad(props){
//             return (
//                 <>
//                     <WrappedComponent {...props} saludo={saludo}/>
//                 </>
//             )
//         }
//     }
// }

// const AppWithSaludoYNombre = withSaludo('Buenas')(App)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppWithSaludoYNombre nombre="Gemma"/>);
