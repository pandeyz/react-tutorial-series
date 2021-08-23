import React from 'react';
import { connect } from 'react-redux';

// Import the action
import { addTodo } from '../actions';

class AddTodo extends React.Component {
	constructor() {
		super();

		this.state = {
			task: ''
		}
	}
	
	// Get the user input value
	handleTodo = (event) => {
		this.setState({ task: event.target.value });
	}

	// To dispatch the user input value
	handleFormSubmit = (event) => {
		event.preventDefault();

		// Check if the task already exist, if not dispatch the action
		if( this.props.tasks.indexOf(this.state.task) === -1 ) {
			this.props.addTodo(this.state.task);
		}
		else {
			alert('Task already exist');
			return false;
		}

		// Reset the state value
		this.setState({ task: '' });
	}

  	render() {
		return (
		<div className="text-center">
			<form className="form-inline" autoComplete="off" onSubmit={ this.handleFormSubmit }>
				<h4>Add Task</h4>
				<div className="form-group">
					<label htmlFor="task">Task:</label>
					<input type="task" className="form-control" id="task" value={this.state.task} onChange={ this.handleTodo } />
				</div>
				<button type="submit" className="btn btn-primary">Add</button>
			</form>
		</div>
		)
  	}
}

function mapStateToProps(state) {
    return {
        tasks: state
    }
}

// export default AddTodo;
export default connect(mapStateToProps, { addTodo })(AddTodo);