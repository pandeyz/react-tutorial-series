import React from 'react';

function TodoList(props) {
  
  // Destructuring of props is done here to get the todo's
  let { todos, handleDelete, onStatusChange } = props;

  return (
    <>
      <h4>Todo List</h4>
      <div style={{ textAlign: 'left', marginLeft: 480, marginRight: 480 }}>
        <ul>
        {
          ( todos.length > 0 )
          ?
          todos.map((todo, index) => 
            <li key={index}>
              <div style={{ float: 'left' }}>
                <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.todo}</span>
              </div>
              <div style={{ float: 'right' }}>
                <input type="checkbox" value={todo.isCompleted} defaultChecked={todo.isCompleted} onChange={(event) => onStatusChange(index, event)} />
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
              <div style={{ clear: 'both' }}></div>
            </li>
          )
          :
          <li>We have nothing to do!</li>
        }
        </ul>
      </div>
    </>
  );
}

export default TodoList;