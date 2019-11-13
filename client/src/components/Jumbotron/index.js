import React from 'react'

// passing any children inherited from parent 
function Jumbotron({ children }) {
    return (
            <div className="jumbotron">
                {children}
            </div>
    );
}
export default Jumbotron;