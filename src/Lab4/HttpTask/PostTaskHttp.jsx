import axios from 'axios';
import React, { Component } from 'react';
import './PostTaskHttp.css';  

class PostTaskHttp extends Component {
    constructor() {
        super();
        this.MyRef = React.createRef();
        this.state = {
            UserId: "",
            Name: "",
            email: "",
            body: ""
        }
    }

    componentDidMount(){
        this.MyRef.current.focus();
    }

    handelChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handelSubmit = (event) => {
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/comments", {
            UserId: this.state.UserId,
            Name: this.state.Name,
            email: this.state.email,
            body: this.state.body
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error("There was an error posting the data!", error);
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handelSubmit} className="post-form">
                    <div className="cont-input">
                        <label>User ID</label>
                        <input 
                            type='number' 
                            name="UserId" 
                            value={this.state.UserId} 
                            onChange={this.handelChange} 
                            ref={this.MyRef}
                        />
                    </div>

                    <div className="cont-input">
                        <label>User Name</label>
                        <input 
                            type='text' 
                            name="Name" 
                            value={this.state.Name} 
                            onChange={this.handelChange} 
                        />
                    </div>

                    <div className="cont-input">
                        <label>User Email</label>
                        <input 
                            type='email' 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handelChange} 
                        />
                    </div>

                    <div className="cont-input">
                        <label>User Body</label>
                        <textarea 
                            name="body" 
                            value={this.state.body} 
                            onChange={this.handelChange} 
                        />
                    </div>
                    <button type='Submit' className="submit-btn">Submit Data</button>
                </form>
            </>
        )
    }
}

export default PostTaskHttp;
