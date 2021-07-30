import React from 'react';

class TodoList extends React.Component {
  render() {
    // Destructuring of props is done here to get the todo's
    let {todos} = this.props;

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
                <div style={{ float: 'left' }}><span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.todo}</span></div>
                <div style={{ float: 'right' }}>
                  <input type="checkbox" value={todo.isCompleted} defaultChecked={todo.isCompleted} onChange={(event) => this.props.onStatusChange(index, event)} />
                </div>
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
}

export default TodoList;