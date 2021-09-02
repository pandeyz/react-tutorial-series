import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import the action
import { addTodo } from '../actions';

function AddTodo() {
	
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state);

	const [task, setTask] = React.useState('');
	// Get the user input value
	const handleTodo = (event) => {
		setTask(event.target.value);
	}

	// To dispatch the user input value
	const handleFormSubmit = (event) => {
		event.preventDefault();

		// Check if the task already exist, if not dispatch the action
		if( tasks.indexOf(task) === -1 ) {
			dispatch(addTodo(task));
		}
		else {
			alert('Task already exist');
			return false;
		}

		setTask('');
	}

  	return (
		<div className="text-center">
			<form className="form-inline" autoComplete="off" onSubmit={ handleFormSubmit }>
				<h4>Add Task</h4>
				<div className="form-group">
					<label htmlFor="task">Task:</label>
					<input type="task" className="form-control" id="task" value={task} onChange={handleTodo} />
				</div>
				<button type="submit" className="btn btn-primary">Add</button>
			</form>
		</div>
	)
}

export default AddTodo;