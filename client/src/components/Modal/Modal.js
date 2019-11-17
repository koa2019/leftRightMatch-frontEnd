import React from "react"
// import "./Modal.css"

function Modal(props) {
    return (

        //   Modal 
        <div className="modal fade" id="results-modal" role="dialog">
            <div className="modal-dialog">

                {/* Modal Content */}
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Candidate Rankings</h4>
                    </div>
                    <div className="modal-body">
                        {/* <h2 id="match-name"></h2> */}
                        {/* <img id="match-img" src="https://pointe3.com/wp-content/uploads/2015/08/default-no-profile-pic.jpg" */}
                            {/* alt="blank profile picture" /> */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;