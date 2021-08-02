// App.js. Component lifecycle explanation

import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			btnClick: false
		}

		console.log('constructor is called here');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps props: ', props);
		console.log('getDerivedStateFromProps state', state);
		
		return state;
	}

	componentDidMount() {
		console.log('componentDidMount is called here');
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate prevProps: ', prevProps);
		console.log('getSnapshotBeforeUpdate prevState: ', prevState);

		return null;
	}

	componentDidUpdate() {
		console.log('componentDidUpdate is called here');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate nextProps: ', nextProps);
		console.log('shouldComponentUpdate nextState: ', nextState);

		return false;
	}

	componentWillUnmount() {
		console.log('componentWillUnmount is called here');
	}

	handleClick = () => {
		console.log('btn is clicked');

		this.setState({ btnClick: !this.state.btnClick });
	}

	render() {
		console.log('render is called here');

		return (
			<div>
				<button onClick={ this.handleClick }>Click Me</button>
			</div>
		);
	}
}

export default App;

/*
Log

Mount:
App.js:11 constructor is called here
App.js:15 getDerivedStateFromProps props:  {}
App.js:16 getDerivedStateFromProps state {btnClick: false}
App.js:46 render is called here

Update: When "shouldComponentUpdate()" return false 
App.js:40 btn is clicked
App.js:15 getDerivedStateFromProps props:  {}
App.js:16 getDerivedStateFromProps state {btnClick: true}
App.js:33 shouldComponentUpdate nextProps:  {}
App.js:34 shouldComponentUpdate nextState:  {btnClick: true}

Update: When "shouldComponentUpdate()" return true 
App.js:40 btn is clicked
App.js:15 getDerivedStateFromProps props:  {}
App.js:16 getDerivedStateFromProps state {btnClick: true}
App.js:33 shouldComponentUpdate nextProps:  {}
App.js:34 shouldComponentUpdate nextState:  {btnClick: true}
App.js:46 render is called here
App.js:22 getSnapshotBeforeUpdate prevProps:  {}
App.js:23 getSnapshotBeforeUpdate prevState:  {btnClick: false}
App.js:29 componentDidUpdate is called here


*/