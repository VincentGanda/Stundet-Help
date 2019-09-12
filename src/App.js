import React, { Component } from 'react';
import NavbarComp from './components/Navbar/Navbar'
import {withRouter, Route, Switch} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Background from './components/Background/Background'
import FooterPage from './components/Footer/Footer'


class App extends Component{
  render(){
    return(
      <div>
      <NavbarComp/>
      <Background />
      <Switch>
        {/* <Route component={Homepage} path='/' exact /> */}
        <Route component={Auth} path='/auth' exact/>
      </Switch>
      <FooterPage />
      </div>
    )
  }
}
export default  withRouter(App);
