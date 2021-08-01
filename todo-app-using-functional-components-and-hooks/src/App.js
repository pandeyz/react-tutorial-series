import './App.css';
import React, { useState } from 'react';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState([]);

  // To handle todo "isCompleted" status change
  const handleStatusChange = (index, event) => {
    let todoArr = [...todos];
    todoArr[index]['isCompleted'] = event.target.checked;
    setTodos(todoArr);
  }

  // To add a new todo task
  const handleAddTodo = (todoDetails) => {
    let todoArr = [...todos];
    todoArr.push(todoDetails);
    setTodos(todoArr);
  }

  // To delete todo
  const handleDeleteTodo = (index) => {
    let todoArr = [...todos];
    todoArr.splice(index, 1);
    setTodos(todoArr);
  }

  return (
    <div className="App">
      <h4>Todo App - Class Components</h4>
      <TodoList todos={ todos } onStatusChange={ handleStatusChange } handleDelete={handleDeleteTodo} />
      <hr/>
      <AddTodo addTodo={ handleAddTodo } />
    </div>
  );
}

export default App;