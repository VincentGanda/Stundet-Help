import React, { Component } from 'react';
import NavbarComp from './components/Navbar/Navbar'
import {withRouter, Route, Switch} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Ayo_bergabung from './Pages/Ayo_bergabung/Ayo_bergabung'
import Homepage from './Pages/Homepage/Homepage';


class App extends Component{
  render(){
    return(
      <div>
      <NavbarComp/>
      <Switch>
        {/* <Route component={Homepage} path='/' exact /> */}
        <Route component={Auth} path='/auth' exact/>
      </Switch>
      </div>
    )
  }
}
export default  withRouter(App);
