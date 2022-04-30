import { useState } from 'react';

function App() {  
  
  // State
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <button className="btn btn-primary" onClick={handleDecrement}>-</button>
      <span style={{ padding: '10px' }}>{count}</span>
      <button className="btn btn-primary" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;