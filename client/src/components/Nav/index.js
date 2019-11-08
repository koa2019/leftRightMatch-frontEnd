import React from "react";
import logo from "../../images/leftRightMatch3.png";
function Nav() {
    return (
        <nav className="navbar d-flex navbar-expand-sm fixed-top">
            <a className="navbar-brand mr-auto p-2" href="/">
                <img src={logo} width="80" height="80" className="d-inline-block " alt="logo" />
                <span className="ml-2">Left Right Match</span>
                </a>
            <div className="navbar-nav p-2">
                <a className="navbar-item nav-link " href="/">Quiz</a>
                <a className="navbar-item nav-link" href="/candidates">Candidates</a>
                <a className="navbar-item nav-link" href="/login">Login</a>
            </div>

        </nav>
    );
}
export default Nav;