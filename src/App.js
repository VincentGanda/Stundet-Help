import React, { Component } from 'react';
import NavbarComp from './components/Navbar/Navbar'
import {withRouter, Route, Switch} from 'react-router-dom'
import Background from './components/Background/Background'
import FooterPage from './components/Footer/Footer'
import Homepage from './Pages/Homepage/Homepage'
import Pelajaran from './components/Pelajaran/Pelajaran'
import Auth from './components/Auth/Auth'
import Kontak from './Pages/Kontak/Kontak'
import Home from './components/Home/Home'
import UtamaBiologi from './components/Biologi/Homepage/UtamaBiologi'



class App extends Component{
  render(){
    return(
      <div>
      <NavbarComp/>
      <Switch>
        <Route path = '/' component={Home} exact />
        <Route path ='/pelajaran' component = {Pelajaran} exact /> 
        <Route path ='/auth' component={Auth} exact />
        <Route path ='/kontak' component={Kontak} exact/>
        <Route path ='/UtamaBiologi' component = {UtamaBiologi} exact />
      </Switch>
      <FooterPage />
      </div>
    )
  }
}
export default  withRouter(App);
