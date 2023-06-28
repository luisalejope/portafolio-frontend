import React, { Children, useState } from "react";
import './style.css'

const Modal = ({handleModal, children}) => {
    return (
        <>

            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="all-modal-content">
                        <div className="content-text">
                            { children }
                        </div>
                        <div className="close-container">
                            <button className="close" onClick={handleModal}>&times;</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Modal
