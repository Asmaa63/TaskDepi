import React, { Component } from 'react';
import './CounterComponent.css';

class CounterComponent extends Component {
    constructor() {
        super();
        this.state = {
            counter: 1
        };
    }


    incrementCount = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }


    decrementCount = () => {
        if (this.state.counter > 1) {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }

    render() {
        return (
        
            <div className='ContainerCounter'>
                <button onClick={this.decrementCount}>-</button>
                <span>{this.state.counter}</span>
                <button onClick={this.incrementCount}>+</button>
            </div>
        
        );
    }
}

export default CounterComponent;
