import React, { Component } from 'react';

class Bands extends Component {
  render(){
    let currentBands = this.props.store.getState().bands
    console.log(currentBands)
    return (
      <div>
        {currentBands.map((band, key) => {
          return <li key={key}>{band}</li>
        })}
      </div>
    );
  }
};

export default Bands;
