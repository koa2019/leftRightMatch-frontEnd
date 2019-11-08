import React from "react";
import logo from "../../images/leftRightMatch3.png";
function Nav() {
    return (
        <nav className="navbar d-flex navbar-expand-sm fixed-top bg-primary">
            <a className="navbar-brand mr-auto my-0" href="/">
                <img src={logo} width="120" height="140" className="d-inline-block " alt="logo" />
                <span className="ml-2">Left Right Match</span>
            </a>
            <div className="navbar-nav p-2">
                <a className="navbar-item nav-link" href="/">Quiz</a>
                <a className="navbar-item nav-link" href="/candidates">Candidates</a>
                <a className="navbar-item nav-link" href="/login">Login</a>
                <div className="navbar-items dropdown">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                    <button className="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
                
            </div>

        </nav>
    );
}
export default Nav;