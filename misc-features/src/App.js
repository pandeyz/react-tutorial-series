import { useEffect } from 'react';
import './App.css';
const axios = require('axios');

function App() {
//   useEffect(() => {
//     axiosCallUsingPromise();
//     axiosCallUsingAsyncAwait();
//   }, []);

//   const axiosCallUsingPromise = () => {
//     console.log('Before triggering axios call');
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//       console.log('Response is ready');
//       console.log(response);
//     });
//     console.log('After axios call');
//   }

//   const axiosCallUsingAsyncAwait = async () => {
//     console.log('Before triggering axios call');
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       console.log('Response is ready');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//     console.log('After axios call');
//   }

  useEffect(() => {
    const intervalId = setInterval(() => {
      document.title = `Time is: ${new Date()}`;
    }, 1000);

    return () => {
      document.title = "Time stopped.";
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
