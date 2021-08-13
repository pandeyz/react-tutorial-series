import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import EditUser from './components/EditUser';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <Router>
    		{/*
        <ul>
    			<li><Link to="/">Home</Link></li>
    			<li><Link to="/profile">Profile</Link></li>
    			<li><Link to="/user/1">Edit User</Link></li>
    		</ul>
        */}
    		<Switch>
    			<Route exact path="/" component={Home}></Route>
    			<Route exact path="/user/:id" component={EditUser}></Route>
    			<Route component={NotFound} />
    		</Switch>
    	</Router>
    </div>
  );
}

export default App;
