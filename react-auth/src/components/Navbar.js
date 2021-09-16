import {Link} from "react-router-dom";

function Navbar() {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    // 
	return (
		<>
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link to="/" className="navbar-brand">AUTH</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/customers-search" className="nav-link">CustomersSearch</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        {!localStorage.getItem('token') ? (
                            <Link to="/login" className="nav-link">Login</Link>
                        ) : (
                            <button onClick={() => handleLogout()} className="btn btn-primary">Logout</button>
                        )}
                    </span>
                </div>
            </nav>
		</>
	)
}

export default Navbar;
