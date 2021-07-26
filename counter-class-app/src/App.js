import React, { useState } from 'react';

class App extends React.Component {
  constructor() {
    super();

    // Creating state
    this.state = { count: 1 };

    // Binding function
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    // console.log('this: ', this);
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement() {
    // console.log('this: ', this);
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '20px' }}>
        <button className={`btn ${( this.state.count <= 0 ) ? 'btn-danger': 'btn-primary'}`} disabled={( this.state.count <= 0 ) ? true: null } onClick={this.handleDecrement}>-</button>
        <span style={{ padding: '10px' }}>{this.state.count}</span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default App;