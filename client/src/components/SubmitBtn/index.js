import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SumbitBtn(props) {
  return (
    <span className="btn btn-secondary Sumbit-btn float-right mx-1" 
    {...props} 
    onSubmit={props.handleQuizSubmit} 
    role="button" 
    tabIndex="0">
      Sumbit
    </span>
  );
}

export default SumbitBtn;
