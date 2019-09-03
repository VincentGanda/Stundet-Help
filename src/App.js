import React, { Component } from 'react';
import NavbarComp from './components/Navbar/Navbar'
import {withRouter, Route, Switch} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Ayo_bergabung from './Pages/Ayo_bergabung/Ayo_bergabung'


class App extends Component{
  render(){
    return(
      <div>
      <NavbarComp/>
      <Switch>
        <Route component={Auth} path='/Auth' exact />
        <Route component={Ayo_bergabung} path='/Ayo_bergabung' exact />
      </Switch>
      </div>
    )
  }
}
export default App;
