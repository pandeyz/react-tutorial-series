// Class component
import React from 'react';

// Parent component
class App extends React.Component {
  render() {
    return (
      <div className="container">
        I am parent component
        <Child />
      </div>
    )
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <p>Hello world,</p>
        <GrandChild />
      </div>
    )
  }
}

class GrandChild extends React.Component {
  render() {
    return (
      <p>How are you</p>
    )
  }
}

export default App;