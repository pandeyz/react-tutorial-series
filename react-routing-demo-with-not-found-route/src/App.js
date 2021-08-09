import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
    	<Router>
    		<ul>
    			<li><Link to="/">Home</Link></li>
    			<li><Link to="/about">About</Link></li>
    			<li><Link to="/contact">Contact</Link></li>
    		</ul>
    		<Switch>
    			<Route exact path="/" component={Home}></Route>
    			<Route exact path="/about" component={About}></Route>
    			<Route exact path="/contact" component={Contact}></Route>
    			<Route component={NotFound} />
    		</Switch>
    	</Router>
    </div>
  );
}

export default App;
