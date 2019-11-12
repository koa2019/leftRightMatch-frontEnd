import React from "react";

// Need to pass the radio input value back to Quiz.js

export function QuizFormItem(props) {
    return (

        <div className="form-group" {...props}>
            <div className="label">
                {props.name}
                <h4>{props.question}</h4>
            </div>
            {props.children}
        </div>
    );
}

export function RadioInput(props) {
    return (
        <div className="form-control chosen" answer-id={props.id} {...props}>
            <label className="radio">
                <input
                    type="radio"
                    name="test"
                    onChange={props.handleChange}
                    value="1"
                />
                Yes
                </label>
            <label className="radio">
                <input
                    type="radio"
                    name="test"
                    onChange={props.handleChange}
                    value="0"
                />
                No
                </label>
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-secondary">
            {props.children}
        </button>
    );
}
