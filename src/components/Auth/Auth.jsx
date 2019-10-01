import React, { Component } from 'react';

class Auth extends Component {
    render() {
        return (

            <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css/" />
            {/*---- Include the above in your HEAD tag --------*/}
            <div className="wrapper fadeInDown">
              <div id="formContent">
                {/* Tabs Titles */}
                {/* Icon */}
                <div className="fadeIn first">
                  <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                </div>
                {/* Login Form */}
                <form>
                  <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                  <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                  <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
                </form>
                {/* Remind Passowrd */}
                <div id="formFooter">
                  <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

export default Auth;