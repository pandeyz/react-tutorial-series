import React from 'react';

export default class Child extends React.PureComponent {
  render() {
    console.log('child rendered');
    return (
      <div>{ this.props.message }</div>
    );
  }
}