import React from 'react';

function Nav() {
    return (
        <nav className='navbar navbar-expand-lg nav-justified bg-secondary fixed-top'>
            <a className='navbar-brand nav-link' href='/'>Left Right Match</a>
            <a className='navbar-item nav-link' href='/'>Quiz</a>
            <a className='navbar-item nav-link' href='/candidates'>Candidates</a>
            <a className='navbar-item nav-link' href='/login'>Login</a>
        </nav>
    );
}
export default Nav;