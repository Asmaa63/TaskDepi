import React, { Component } from 'react';
import './MainForm.css';  
import Login from './Login';
import SignUp from './SignUP';

class MainForm extends Component {
    constructor() {
        super();
        this.myRef = React.createRef();
        this.state = {
            email: '',
            password: '',
            showSignup: false,
            showLogin: false,
        };
    }

    componentDidMount(){
        this.myRef.current.focus();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.type]: event.target.value,
        });
    };

    handleLoginClick = (e) => {
        this.setState({ showLogin: true });
    };

    handleSignupClick = (e) => {
        this.setState({ showSignup: true });
    };

    render() {
        if (this.state.showSignup) {
            return <SignUp></SignUp>;
        }
        if (this.state.showLogin) {
            return <Login email={this.state.email} />;
        }
        return (
            <div className="form-container">
                <form>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        ref={this.myRef}
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleLoginClick}>Login</button>
                    <button onClick={this.handleSignupClick}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default MainForm;
