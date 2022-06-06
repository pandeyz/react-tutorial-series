import { useRef, useState, useEffect } from 'react';

function App() {

  return (
    <div>
      {/* <LogButtonClicks /> */}
      {/* <Stopwatch /> */}
      {/* <AccessingElement /> */}
      <InputFocus />
    </div>
  );
}

export default App;

function LogButtonClicks() {
  const countRef = useRef(0);
  
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log('I rendered!');
  return <button onClick={handle}>Click me</button>;
}

function Stopwatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);
  
  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}

function AccessingElement() {
  const elementRef = useRef();

   useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); // logs <div>I'm an element</div>
  }, []);

  return (
    <div ref={elementRef}>
      I'm an element
    </div>
  );
}

function InputFocus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input 
      ref={inputRef} 
      type="text" 
    />
  );
}