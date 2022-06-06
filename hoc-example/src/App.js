import React from 'react';

function App() {
  const Hello = ({ name }) => <h1>Hello {name}!</h1>;
  
  const HelloReact = HOCFunction(Hello, false);

  return (
    <div className="container">
      <HelloReact />
    </div>
  );
}

function HOCFunction(WrappedComponent, isLoggedIn) {
  return class extends React.Component{
    render(){
      return ( isLoggedIn ) ? <WrappedComponent name="Ajay" />: <WrappedComponent name="Unknown" />
    }
  }
}

export default App;