import React, { Component } from 'react';
import ThreeComponent from './ThreeComponent';

class TwoComponent extends Component{
    render(){
        return(
            <>
            <h1>this is Two component</h1>
            <ThreeComponent/>
            
            </>
        )
    }
}

export default TwoComponent;