// Functional component

// Parent component
function App() {
  return (
    <div className="container">
      <Child />
    </div>
  );
}

// Child component
function Child() {
  return (
    <div>
      <p>Hello world,</p>
      <GrandChild />
    </div>
  );
}

function GrandChild() {
  return (
    <p>How are you</p>
  ); 
}

export default App;