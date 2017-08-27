import React, { Component } from 'react';

class BandInput extends Component {

  constructor () {
    super ()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.text)
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    }
    )

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={this.handleChange} />
        <button type='submit' onClick={this.handleSubmit} value='Submit' placeholder='band' />
        </form>
      </div>
    );
  }
};

export default BandInput;
