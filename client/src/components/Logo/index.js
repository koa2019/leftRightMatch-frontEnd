import React from "react";

function Logo(props) {
    return (
        <img src={props.logo} width={props.width} height={props.height} className="logo" alt="logo-large" />
    );
}

export default Logo;