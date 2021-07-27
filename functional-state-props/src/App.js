import React, { useState } from 'react';

function App() {

  const [name, setName] = useState('Unknown');

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <SayHello name={name} code={123} email={'max@email.com'} />
    </div>
  );
}

function SayHello(props) {

  let { name, code, email } = props;

  return (
    <div>
      <p>Hello {name} {code}</p>
      <SayBye email={email} />
    </div>
  );
}

function SayBye(props) {

  let { email } = props;

  return (
    <p>Bye {email}</p>
  );
}

export default App;