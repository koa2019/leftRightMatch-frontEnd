import React from "react";

function Logo(props, { children }) {
    return (
        <div className="logo">
            <img src={props.logo} width={props.width} height={props.height} alt="logo" />
            {children}
        </div>

    );
}

export default Logo;