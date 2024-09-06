import axios from 'axios';
import React, { Component } from 'react';

class GetTaskHttp extends Component{
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/comments").then(
            (Response)=>{
                console.log(Response.data);
                this.setState({
                    posts : Response.data
                }, ()=>{
                    console.log(this.state.posts);
                });
            }
        ).catch(
            (Error)=>console.log(Error)
        )
    }

    render(){
        return(
            <div className=''>
                <h2>Posts</h2>
                <div className='cards'>
                    {
                        this.state.posts.map((post)=>{
                            return(
                                <div className='componentCard' key={post.id}>
                                  <h2>Name: {post.name}</h2>  
                                  <h2>Email: {post.email}</h2>
                                  <p>Body: {post.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default GetTaskHttp;
