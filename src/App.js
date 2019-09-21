import React, { Component } from 'react';
import NavbarComp from './components/Navbar/Navbar'
import {withRouter, Route, Switch} from 'react-router-dom'
import Background from './components/Background/Background'
import FooterPage from './components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage'
import Pelajaran from './Pages/Pelajaran/Pelajaran'
import Auth from './components/Auth/Auth'



class App extends Component{
  render(){
    return(
      <div>
      <NavbarComp/>
      <Background />
      <Switch>
        <Route path = '/' component={Homepage} exact />
        <Route path ='/pelajaran' component = {Pelajaran} exact /> 
        <Route path ='/auth' component={Auth} exact />
      </Switch>
      <FooterPage />
      </div>
    )
  }
}
export default  withRouter(App);
