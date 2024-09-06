import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component{
    constructor(){
        super();
        this.myRef = React.createRef();
        this.state ={
            name :'',
            email : '',
            age : ' ',
            gender : ' ',
            password : ' ',
            isSignedUp: false
        }
    }

    componentDidMount(){
      this.myRef.current.focus();
    }

    handleChange = (event)=>{
      this.setState({
        [event.target.name]: event.target.value 
      })
    }

    handleSignup = () => {
      this.setState({ isSignedUp: true });
    };

    render(){

      if (this.state.isSignedUp) {
        return (
          <div className='login-container'>
            <h2>You are signed up!</h2>
            <p>Welcome, {this.state.name}!</p>
            <p>You signed up on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}.</p>
          </div>
        );
      }

        return(
           <div className="signup-container">
            <form>
            <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            ref={this.myRef}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <select
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleSignup}>
            Sign Up
          </button>
            </form>
           </div>
        )
    }

}
export default SignUp;