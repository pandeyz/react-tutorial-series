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
    let todoArr = [...this.state.todos];
    todoArr[index]['isCompleted'] = event.target.checked;
    this.setState({todos: todoArr});
  }

  // To add a new todo task
  handleAddTodo = (todoDetails) => {
    let todoArr = [...this.state.todos];
    todoArr.push(todoDetails);
    this.setState({todos: todoArr});
  }

  // To delete todo
  handleDeleteTodo = (index) => {
    let todoArr = [...this.state.todos];
    todoArr.splice(index, 1);
    this.setState({todos: todoArr});
  }

  render() {
    return (
      <div className="App">
        <h4>Todo App - Class Components</h4>
        <TodoList todos={ this.state.todos } onStatusChange={ this.handleStatusChange } handleDelete={this.handleDeleteTodo} />
        <hr/>
        <AddTodo addTodo={ this.handleAddTodo } />
      </div>
    );
  }
}

export default App;
