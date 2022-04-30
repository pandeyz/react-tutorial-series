// Functional component

// Parent component
function App() {
  return (
    <div className="container">
      <p>I am parent component</p>
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