import React, { Component } from 'react';
import FourComponent from './FourComponent';
import { ConsumerContext } from '../Contexts/MainContext';
import './ComponentCard.css';

class ThreeComponent extends Component {
  render() {
    return (
      <>
        <h1>this is Three component</h1>
        <ConsumerContext>
          {(values) => (
            <div className='cards'>
              {values.users.map((user, index) => (
                <div key={index} className="componentCard">
                  <h2>name: {user.name}</h2>
                  <h2>Age: {user.age}</h2>
                  <h2>Country: {user.country}</h2>
                  <h2>Address: {user.address}</h2>
                  <h2>Phone: {user.phone}</h2>
                </div>
              ))}
            </div>
          )}
        </ConsumerContext>
        <FourComponent />
      </>
    );
  }
}

export default ThreeComponent;
