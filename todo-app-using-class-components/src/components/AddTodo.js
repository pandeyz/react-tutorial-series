// AddTodo.js. Its a controlled component
import React from 'react';

class AddTodo extends React.Component {
  constructor() {
      super();

      this.state = {
          todo: { todo: '', isCompleted: false }
      }
  }

  // To handle form submit
  handleSubmit = (event) => {
    event.preventDefault();
    
    // Calling of parent component function with data
    this.props.addTodo(this.state.todo);

    // Reset the state to initial
    this.setState({todo: { todo: '', isCompleted: false }});
  }

  // To handle text change
  handleTextChange = (event) => {
    let todoObj = {...this.state.todo};
    todoObj.todo = event.target.value;
    this.setState({todo: todoObj});
  }
  
  // To handle checkbox selection change
  handleCheckboxChange = (event) => {
    let todoObj = {...this.state.todo};
    todoObj.isCompleted = event.target.checked;
    this.setState({todo: todoObj});
  }

  render() {
    return(
      <div>
        <h4>Add Todo</h4>
        <div style={{ textAlign: 'left', marginLeft: 480, marginRight: 480 }}>
          <form onSubmit={this.handleSubmit}>
              <div>
                <label>Todo </label>
                <input type="text" name="todo" autoComplete="off" onChange={this.handleTextChange} value={this.state.todo.todo} />
              </div>
              <div>
                <label>Status <input type="checkbox" name="isCompleted" onChange={this.handleCheckboxChange} checked={(this.state.todo.isCompleted)} value={this.state.todo.isCompleted} /></label>
              </div>
              <div>
                <button>Add</button>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddTodo;