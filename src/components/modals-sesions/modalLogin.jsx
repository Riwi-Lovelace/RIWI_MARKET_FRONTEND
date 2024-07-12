
import './userModal.css'
import { useEffect, useState } from "react"

export const ModalSesion =({active})=>{


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

                    <div className='modal-model-box-input-user'>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username'/>
                    </div>
                <div className='modal-model-box-input-pass'>
                    <label htmlFor="Password">Password</label>
                    <input type="password" name='Password'/>
                </div>
                    <button className='modal-model-but-ing-auth'>Register</button>
            
                    <p>you don't Have a account?</p>
                    <a href="/register">Register</a>
                    </div>
                        <div className='modal-model-section2'>
                    <img src="" alt="" />
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