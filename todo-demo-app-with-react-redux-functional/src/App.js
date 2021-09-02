import React from 'react';

import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

class App extends React.Component {
  	render() {
		return (
		<div className="container" style={{ marginTop: 20 }}>
			<AddTodo />
			<hr />
			<ListTodo />
		</div>
		)
  	}
}

export default App;