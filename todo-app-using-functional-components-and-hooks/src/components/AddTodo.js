// AddTodo.js. Its a controlled component
import React, { useState } from 'react';

function AddTodo(props) {
    
  const [todo, setTodo] = useState({ todo: '', isCompleted: false });

  // To handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Calling of parent component function with data
    props.addTodo(todo);

    // Reset the state to initial
    setTodo({ todo: '', isCompleted: false });
  }

  // To handle text change
  const handleTextChange = (event) => {
    let todoObj = {...todo};
    todoObj['todo'] = event.target.value;
    setTodo(todoObj);
  }
  
  // To handle checkbox selection change
  const handleCheckboxChange = (event) => {
    let todoObj = {...todo};
    todoObj.isCompleted = event.target.checked;
    setTodo(todoObj);
  }

  return(
    <div>
      <h4>Add Todo</h4>
      <div style={{ textAlign: 'left', marginLeft: 480, marginRight: 480 }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Todo </label>
            <input type="text" name="todo" autoComplete="off" onChange={handleTextChange} value={todo.todo} />
          </div>
          <div>
            <label>Status <input type="checkbox" name="isCompleted" onChange={handleCheckboxChange} checked={(todo.isCompleted)} value={todo.isCompleted} /></label>
          </div>
          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;