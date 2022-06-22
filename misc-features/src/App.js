// import React, { useState,useEffect } from "react";

const App = () => {
  const userName = 'Joe';

  return (
    <WelcomePage title={<WelcomeMessage userName={userName} />} />
  );
}

const WelcomePage = ({ title }) => {
  return (
    <>
      {title}
      {/** Some other welcome page code */}
    </>
  );
}

const WelcomeMessage = ({ userName }) => {
  return (
    <h1>Hey, {userName}!</h1>
  );
}

export default App;