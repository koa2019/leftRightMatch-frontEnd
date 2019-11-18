import React from "react"
import "./Modal.css"

// if show === true then pass this className, else pass this className to define div modal
function Modal({ props, handleClose, show, children }) {

    console.log(props)
    const showHideModal = show ? "modal display-block" : "modal display:none";
    // const showHideModal = show ? "modal" : "modal display:none";
    // const Modal = ({ handleClose, show, children }) => {
    // console.log('modal handleClose= ', handleClose)

    return (
        <div className={showHideModal} show={show} >

            <div className="modal-header">
                <h4 className="modal-title">Candidate Rankings</h4>
                <button type="button" className="close" onClick={handleClose} data-dismiss="modal">&times;</button>
            </div>

            <section className="modal-main">

                <div className="row">
                    <div className="col">
                        {children}
                        {/* <img className="rImg" src={props.image} alt={props.name} /> */}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="rItems">Candidate Name Goes Here</div>
                        {/* <div className="rItems">{props.name}</div> */}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="rItems">"45%"</div>
                        {/* <div className="rItems">{props.percentage}</div> */}
                    </div>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={handleClose} data-dismiss="modal">Close</button>
                </div>

            </section>
        </div>
    )
}


//     return (
//         // console.log('modal hit')
//         //   Modal 
//         <div className={showHideModal} id="results-modal" role="dialog">
//         {/* <div className={showHideModal}> */}
//             <div className="modal-dialog">

//                 {/* Modal Content */}
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <button type="button" className="close" onClick={handleClose} data-dismiss="modal">&times;</button>
//                         {children}
//                     </div>
//                     <div className="modal-body">
//                      <h2 data-id="match-name">h2 children</h2>  
//                      <img goes here>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-default" onClick={handleClose} data-dismiss="modal">Close</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Modal;