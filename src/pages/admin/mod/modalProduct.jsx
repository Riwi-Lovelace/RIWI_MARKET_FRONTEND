import React, { useState, useRef, useEffect } from "react";


export const ProductModalParam = ({ active }) => {

    const [activeModal, SetactiveModal] = useState(false);

    useEffect(() => {
        SetactiveModal(active == true)
    }, [activeModal,active]);

    if (activeModal) {
        return (
            <div></div>
        )
    } else {
        return (

            <div className="modal fade" id="userModal">
                <h1>Modal activo shop</h1>
            </div>
        )
    }

}