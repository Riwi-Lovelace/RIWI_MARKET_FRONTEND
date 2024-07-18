
import './userModal.css'
import { useEffect, useState } from "react"

import {ButRedirect} from '../buttons/buttom-redirects.jsx'






export const ModalSesion =({active})=>{

    let Link = '/login'


    const [modalActive, SetmodalActive] = useState(true);

    useEffect(() => {
        SetmodalActive(active == true);
    }, [active]);


    //usar la clase "modal-verifier-edit" para cambiar el sitio del modal
    return(
       <>
       {
        modalActive == true ? (
            <div className="modal-model-Login-box-ground     modal-verifier-edit">
                <div className='modal-model-container-LG'>
                    <div className='modal-model-section1'>
                        <h1>Login</h1> 
                    </div>
                        <div className='modal-model-section2'>
                            <ButRedirect text ="iniciar Sesion" Link={Link} />
                            <p>or your have a account?</p>
                            <a href="/register">Register</a>
                        </div>

                </div>
            </div>
        ):(
             <div></div>
        )
       }
       </> 
    )
}