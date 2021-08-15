import React from 'react';
import Child from './Child';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: 'hello',
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));

    // Child will re-render when this state is changed
    if( this.state.counter > 8 )
    {
      this.setState({message: 'hello, how are you?'});
    }
  };

  render() {
    console.log('parent rendered');
    return (
      <main style={{ margin: '20px' }}>
        {this.state.counter}
        <br />
        <Child message={this.state.message} />
        <button type='button' onClick={this.handleClick}>Increment</button>
      </main>
    );
  }
}
