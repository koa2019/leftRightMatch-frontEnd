import React from "react";

function Logo(props) {
    return (
        <div>
        <img src={props.image} width={props.width} height={props.height} className="logo" alt={props.name} />
        {props.children}
        </div>
    );
}

export default Logo;