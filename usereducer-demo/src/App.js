import './App.css';
import { useState, useReducer } from "react";

function App() {
  return (
    <div className="App" style={{ marginTop: 20 }}>
      <Todos />
    </div>
  );
}

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  const [todo, setTodo] = useState('');
  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      id: todos.length + 1,
      title: todo,
      complete: false,
    }
    dispatch({ type: "ADD_TODO", payload: payload });
    setTodo('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="" onChange={handleChange} value={todo} />
        <button type="submit">Add Todo</button>
      </form>
      <hr />
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default App;
