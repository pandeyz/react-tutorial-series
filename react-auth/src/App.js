import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Customers from './components/Customers.js';
import Login from './components/Login.js';
import PrivateRoute from './components/PrivateRoute.js';

function App()
{
    // Return
    return (
        <Router>
            <Header />
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <h1>Public URL</h1>
                    </Route>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/customers-search" component={Customers} />
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}

export default App;
