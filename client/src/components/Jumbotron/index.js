import React from 'react';

// passing any children inherited from parent 
function Jumbotron({ children }) {
    return (
        // <div className="overlay">
            <div className="jumbotron">
                {children}
            </div>
        // </div>
    );
}
export default Jumbotron;