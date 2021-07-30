import './App.css';
import React from 'react';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        // { todo: 'Understand the requirement', isCompleted: true },
        // { todo: 'Do some paper work', isCompleted: false },
      ]
    }
  }

  // To handle todo "isCompleted" status change
  handleStatusChange = (index, event) => {
    let {todos} = this.state;
    todos[index]['isCompleted'] = event.target.checked;
    this.setState({todos: todos});
  }

  // To add a new todo task
  handleAddTodo = (todoDetails) => {
    let {todos} = this.state;
    todos.push(todoDetails);
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="App">
        <h4>Todo App - Class Components</h4>
        <TodoList todos={ this.state.todos } onStatusChange={ this.handleStatusChange } />
        <hr/>
        <AddTodo addTodo={ this.handleAddTodo } />
      </div>
    );
  }
}

export default App;
