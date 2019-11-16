import React from "react"
import "./Jumbotron.css"

// passing any props & children inherited from parent 
function Jumbotron({ specs, children }) {
    return (
        // {`container${fluid ? "-fluid" : " " + specs}`}
        <div className={specs
        .split(" ")
        .map(specs => "jumbotron " + specs)
        .join(" ")}
        >
            {children}
        </div>
    );
}
export default Jumbotron;