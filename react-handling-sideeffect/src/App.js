import React, { useState, useEffect } from 'react';

function App() {

	const [count, setCount] = useState(0);
	const [isLoggedOut, setIsLoogedOut] = useState(false);

	useEffect(() => {
		if( isLoggedOut === true )
		{
			localStorage.remove();
			sessionStorage.remove();
			// Your logic here
		}
	}, [isLoggedOut]);	// [] -> Dependency array

	return (
		<div style={{ margin: '20px' }}>
			<div>{count}</div>
			<button onClick={() => setCount(count + 1)}>Click Me</button>
		</div>
	);
}

export default App;