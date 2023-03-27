import React, { useState } from "react";
import './style.css'

const Modal = () => {
    const [ modalStatus, setModalStatus ] = useState(false);

    const handleModal = () => {
        setModalStatus(!modalStatus);
    }
    return (
        <>
            <button id="myBtn" onClick={handleModal}>Open Modal</button>
            {modalStatus && (
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close" onClick={handleModal}>&times;</span>
                        <p>Some text in the Modal..</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal
