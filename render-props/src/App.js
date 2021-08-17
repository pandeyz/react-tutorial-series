import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Wrapper
        render={({ increment, decrement, count }) => (
          <div style={{ margin: '20px' }}>
            <div>
              <h3>Render Props Counter</h3>
            </div>
            <div>
              <p>{count}</p>
              <button onClick={() => increment()}>Increment</button>
              <button onClick={() => decrement()}>Decrement</button>
            </div>
          </div>
        )}
      />
    );
  }
}

class Wrapper extends React.Component {
  state = {
    count: 0
  };

  // Increase count
  increment = () => {
    const { count } = this.state;
    return this.setState({ count: count + 1 });
  };

  // Decrease count
  decrement = () => {
    const { count } = this.state;
    return this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        {this.props.render({
          increment: this.increment,
          decrement: this.decrement,
          count: count
        })}
      </div>
    );
  }
}


export default App;