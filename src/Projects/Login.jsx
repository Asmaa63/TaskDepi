import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    const currentDateTime = new Date().toLocaleString(); 

    return (
      <div className='login-container'>
        <h2>You are logged in!</h2>
        <p>Email: {this.props.email}</p>
        <p>Login Time: {currentDateTime}</p>
      </div>
    );
  }
}

export default Login;
