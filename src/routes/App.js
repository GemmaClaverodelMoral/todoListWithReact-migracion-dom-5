

import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { NewToDoPage } from './new/NewToDoPage';
import { EditToDoPage } from './edit/EditToDoPage';


function App() {
  
  return ( 
   <HashRouter>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/edit/:id' component={ EditToDoPage } />
        <Route path='/new' component={ NewToDoPage } />
        <Route path='*' component={() => <p>Page Not Found</p> } />
      </Switch>
   </HashRouter>
  )
}
export { App };