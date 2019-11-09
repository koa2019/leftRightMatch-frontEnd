import React from "react";

function Logo(props, { children }) {
    return (
        <div className="logo">
            <img src={props.logo} width={props.width} height={props.height} alt={props.name} />
            {children}
        </div>

    );
}

export default Logo;