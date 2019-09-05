import React from 'react';
import './Navbar.css'

import {Link} from 'react-router-dom'
import Homepage from '../../Pages/Homepage/Homepage';


class NavbarComp extends React.Component {
  state = {
    drawerOpen : true
  }
 
  render() {
    return (
      <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
     
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous" />
      
      <link rel="stylesheet" href="style5.css" />
      
      <div className="wrapper d-inline-block">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button type="button" id="sidebarCollapse" className="navbar-btn" onClick={() => this.setState({drawerOpen : !this.state.drawerOpen})}>
                <span />
                <span />
                <span />
              </button>
              <div>
                <ul className="nav navbar-nav ml-auto">
                <Link to='/auth'className='nav-link'><li className="nav-item active">
                    Login / Register
                  </li></Link>
                </ul>
              </div>
            </div>
          </nav>
       
        <nav id="sidebar" className={'d-inline-block ' + (this.state.drawerOpen ? 'active' : null)}>
          <div className="sidebar-header">
            <h3>Selamat datang di Student Help!</h3>
          </div>
          <ul className="list-unstyled components">
            <p>Edukasi gratis untuk anak Indonesia</p>
            <Link to='/'><li>
              <a>Homepage</a>
            </li></Link>
            <li>
              <a href="#">Team Kami</a>
            </li>
            <li>
              <a href="#">Kuy Belajar</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Ayo Bergabung!</a>
            </li>
          </ul>
          <ul className="list-unstyled CTAs">
            <li>
              <a href="/" className="download">Contoh pembuatan CV</a>
            </li>
            <li>
              <a href="/" className="download">We are Hiring!</a>
            </li>
          </ul>
        </nav>
        {/* Page Content Holder */}
        <div id="content">
          
         <Homepage/>
          
        </div>
      </div>
     
    </div>
    
    );
  }
}
export default  NavbarComp
