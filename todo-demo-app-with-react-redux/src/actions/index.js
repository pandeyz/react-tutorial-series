// action.js

export const addTodo = (task) => {
	return {
		type : 'ADD_TODO',
		payload: task
    }
}

export const deleteTodo = (task) => {
	return {
		type : 'DELETE_TODO',
		payload: task
    }
}