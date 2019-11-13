import React from "react";

function Image(props) {
    return (
        <div>
        <img className="image-fluid" src={props.image} height={props.height} alt={props.name} />
        {props.children}
        </div>
    );
}

export default Image;