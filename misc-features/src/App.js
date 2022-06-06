import React, { useState,useEffect } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let interval = setInterval(() => { setProgress( progress + 10 ) }, 1000);
    console.log('interval: ', interval);
  }, []);

  return (
    <div className="w-full mt-2 h-10 bg-gray-300">
      <div
        className="bg-red-800 h-5"
        style={{ width: `${progress}%` }}
      >{progress}</div>
    </div>
  );
};

export default App;