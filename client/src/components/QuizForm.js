import React from "react";

// Need to pass the radio input value back to Quiz.js

export default function QuizFormItem(props) {
    return (
        <div className="form-group" onSubmit={props.handleSubmit}>
        {/* <div className="form-group" onSubmit={props.handleSubmit({value})}> */}
            <h4>{props.name}</h4>
            <div className="label">{props.question}</div>
            <div className="form-control">
                <label className="radio">
                    <input
                        type="radio"
                        name="test"
                        onChange={props.handleChange}
                        value="1"
                        // checked={props.test === "1"}
                    />
                    Yes
                </label>
                <label className="radio">
                    <input
                        type="radio"
                        name="test"
                        onChange={props.handleChange}
                        value="0"
                        // checked={props.test === "0"}
                    />
                    No
                </label>
            </div>
        </div>
    );
}

// Attempted to export radio inputs on their own, but it wasn't working

// export function FormRadioBtn({ props }) {
//     return (
//         <div className="form-control">
//             <label className="radio">
//                 <input
//                     type="radio"
//                     name="test"
//                     onChange={props.handleChange}
//                     value="Yes"
//                     checked={props.test === "Yes"}
//                 />
//                 Yes
//                 </label>
//             <label className="radio">
//                 <input
//                     type="radio"
//                     name="test"
//                     onChange={props.handleChange}
//                     value="No"
//                     checked={props.test === "No"}
//                 />
//                 No
//                 </label>
//         </div>
//     );
// }
