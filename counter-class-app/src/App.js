import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    // Creating state, its always an object
    this.state = { count: 1 };

    // Binding function
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '20px' }}>
        <button className={`btn ${( this.state.count <= 0 ) ? 'btn-danger': 'btn-primary'}`} onClick={this.handleDecrement}>-</button>
        <span style={{ padding: '10px' }}>{this.state.count}</span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default App;