import React, { Component } from 'react';
import FiveComponent from './FiveComponent';

class FourComponent extends Component{
    render(){
        return(
            <>
            <h1>this is Four component</h1>
            <FiveComponent/>
            
            </>
        )
    }
}

export default FourComponent;