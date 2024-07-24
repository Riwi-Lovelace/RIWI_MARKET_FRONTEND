import React, { useState, useRef, useEffect } from "react";


export  const userModalParam = ({active})=>{

    const [activeModal,SetactiveModal ] = useState(false);

    useEffect(() => {
        SetactiveModal(active == true)
    }, [activeModal]);

    if (activeModal){
        return(
            <div className="modal fade" id="userModal">
                <h1>Modal activo</h1>
            </div>
        )
    }else{
        return(
            <div className="modal fade" id="userModal">
                <h1>Modal desactivado</h1>
            </div>
        )
    }
   
}