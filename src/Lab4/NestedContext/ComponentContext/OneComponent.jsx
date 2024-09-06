import React, { Component } from 'react';
import TwoComponent from './TwoComponent';

class OneComponent extends Component{
    render(){
        return(
            <>
            <h1>this is one component</h1>
            <TwoComponent/>

            </>
        )
    }
}

export default OneComponent;