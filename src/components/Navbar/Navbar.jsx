import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import './Navbar.css'
  import Homepage from '../../Pages/Homepage/Homepage'
  import {Link} from 'react-router-dom'
  import Auth from '../Auth/Auth'
  
  // import {connect} from 'react-redux'
  


class NavbarComp extends React.Component {
 
  render() {
    return (
      <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
     
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous" />
      
      <link rel="stylesheet" href="style5.css" />
      
      <div className="wrapper">
       
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Selamat datang di Student Help!</h3>
          </div>
          <ul className="list-unstyled components">
            <p>Edukasi gratis untuk anak Indonesia</p>
            <li>
              <a href="#">Homepage</a>
            </li>
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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button type="button" id="sidebarCollapse" className="navbar-btn">
                <span />
                <span />
                <span />
              </button>
              <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-align-justify" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to='../Auth/Auth'><a className="nav-link" href='../Auth/Auth'>Login</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to='../Auth/Auth'><a className="nav-link" href='../Auth/Auth'>Register</a></Link>
                  </li>
                 
                </ul>
              </div>
            </div>
          </nav>
         <Homepage />
          
        </div>
      </div>
     
    </div>
    
    );
  }
}
export default  NavbarComp