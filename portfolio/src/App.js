import React from 'react';
import Home from "./Home"
import Admin from './Admin'
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Admin' component={Admin} />
        {/* <Route path='/NewYork' component={NewYork} />
        <Route path='/Summer' component={Summer} />
        <Route path='/Telos' component={Telos} /> */}
      </Switch>
      
    </div>
  );
}

export default App;
