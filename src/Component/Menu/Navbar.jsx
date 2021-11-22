import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand ms-4" to="/" >
       API USE
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link  className="nav-link ms-5" to="/adduser">
              Add User
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link  ms-3" to="/display">
              Show Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
