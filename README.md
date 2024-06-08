## [TODO's List](https://gemmaclaverodelmoral.github.io/ToDos-List-with-React/) - Proyecto Introductorio a React.js con manejo de estados con React.Reducer
 - 📖🗓️
Ejercicio de:
MIGRACION DE DEPENDENCIAS de React-Router-DOM-6 a DOM-5

<div align = "center">  
<img src="public\TODOs-vistas.png" width="800px"/>
</div>
<div align = "center">  
<img src="https://github.com/GemmaClaverodelMoral/ToDos-List-with-React/assets/142899102/60525a84-3840-4e6f-ad99-90f8de93fe9b" width="50px"/>
</div>

Se vuelve a hacer toda la aplicacion pero con React-Router-DOM-5
Pasos para el cambio:
- ejecutar: npm uninstall react-router-dom
- ejecutar: npm install react-router-dom@5
- Reemplazar routes por switch
- Reemplazar 
      <Route path="/xxx" element={< xxx />} /> 
  por <Route path="/xxx" component={ xxx } />
- Reemplazar 
      <Route path="/xxx" element={<Navigate to="/xxx" />} />
  por <Redirect from="/xxx" to="/xxx" /> 
- Reemplazar 
      const navigate = useNavigate()
  por const history = useHistory();
- Reemplazar 
      import { Routes, Navigate, useNavigate } from 'react-router-dom';
  por import { Switch, Redirect, useHistory }  from 'react-router-dom';
- Reemplazar 
      navigate('/xxx');
  por history.push('/xxx');   
- Remplazar:
      onEdit={() => history.push(`/edit/${toDo.id}`, {state:  toDo.text })
  por onEdit={() => history.push(`/edit/${toDo.id}?text=${toDo.text}`)}
  en el componente hijo: 
  - import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
  - const history = useHistory()
- Los Remplazos que más me sacaron la piedrunchis..., el tiempo y mas me hicieron entender la problematica de migracion:






