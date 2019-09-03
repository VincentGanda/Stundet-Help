import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'


class Auth extends Component {
    state ={
        registerUsername: '',
        registerPassword: '',
        repeatPassword : '',
        registerEmail: '',
        loginUsername: '',
        loginPassword : '',
        isSame : true,
        page: 'REGISTER'
        
    }
    onLoginBtnHandler = () => {
        // let loginObj = {
        //     username : this.state.loginUsername,
        //     password : this.state.loginPassword
        // }
        // this.props.onLogout()
        this.props.onLogin({asalNama : this.state.loginUsername, asalKunci : this.state.loginPassword})
    }

    onRegisterBtnHandler = () => {
        if(this.state.repeatPassword !== this.state.registerPassword || (this.state.repeatPassword == '' && this.state.registerPassword == '')){
            this.setState({isSame : false})
        }
        if(!this.state.registerEmail){
            this.refs.registerEmail.className += ' invalid-input'
        }
        if(!this.state.registerUsername){
            this.refs.registerUsername.className += ' invalid-input'
        }
        if(!this.state.repeatPassword){
            this.refs.repeatPassword.className += ' invalid-input'
        }
        if(!this.state.registerPassword){
            this.refs.registerPassword.className += ' invalid-input'
        }
        if(this.state.registerEmail && this.state.registerPassword && this.state.repeatPassword && this.state.registerUsername){
            let registerObj = {
                username : this.state.registerUsername,
                password : this.state.registerPassword,
                email : this.state.registerEmail
            }
    
            this.props.onRegister(registerObj)
        }else{
            swal('input')
        }
    }
    passwordCheckter =()=>{
        if(!this.state.isSame){
            return(
                <div className="alert alert-danger">Password anda belum sama</div>
            )
        }
    }
    render() {
        
        return (
            <div>
                <div className="container auth">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="tab-auth">
                            <div className={"d-inline-block m-1 text-center " + (this.state.page == "LOGIN" ? "active-auth" : '')} onClick={() => this.setState({page : 'LOGIN'})}>
                                Login</div>
                            <div className={"d-inline-block m-1 text-center " + (this.state.page == "REGISTER" ? 'active-auth' : '')} onClick={() => this.setState({page : "REGISTER"})}>
                                Register</div>
                        </div>
                    </div>
                </div>
                <div className="col-9 auth-right text-center pb-5">
                    {
                        this.state.page == "REGISTER"
                        ?
                    <div className="container-fluid">
                        <h3 className="pb-3" style={{color: 'red', marginTop: '7%'}}>Registrasikan dirimu sekarang!</h3>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <input type="text" ref="registerUsername" className="form-control" placeholder="Masukkan Username" onChange={(e)=> this.setState({registerUsername: e.target.value})}/>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <input type="text" ref="registerEmail" className="form-control" placeholder="Masukkan E-maimu" onChange={(e)=> this.setState({registerEmail: e.target.value})} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <input type="password" ref="registerPassword" className="form-control" placeholder="Masukkan Passwordmu" onChange={(e)=> this.setState({registerPassword: e.target.value})}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <input type="password" ref="repeatPassword" className="form-control" placeholder="Repeat Password" onChange={(e)=> this.setState({repeatPassword: e.target.value})}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                //password checker disini
                            </div>
                            <div className="col-4">
                                {
                                    !this.props.isLoading
                                    ?
                                    <input type="button" ref="btnLogin" className="btn float-right btn-register" value="Register"/>
                                    :
                                    <div className="spinner-border text-primary" >
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container-fluid">
                        <h3 className="pb-3" > Login Sekarang</h3>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username" onChange={(e)=> this.setState({loginUsername: e.target.value})}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Input Password" onChange={(e)=> this.setState({loginPassword: e.target.value})}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <input type="button" className="btn float-right btn-register" value="Login" onClick={this.onLoginBtnHandler}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    }

                </div>
            </div>
        );
    }
}

export default  Auth;