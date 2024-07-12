
import './userModal.css'
import { useEffect, useState } from "react"

export const ModalSesionRegister =({activedRegister})=>{

    const [modalActive, SetmodalActive] = useState(true);

    useEffect(() => {
        SetmodalActive(activedRegister == true);
    }, [activedRegister]);

    return(
       <>
       {
        modalActive == true ? (
            <div className="modal-model-Login-box-ground">
            <div className='modal-model-container-LG'>
                <div className='modal-model-section1'>
                    <h1>Register</h1>
        
                    <div className='modal-model-box-input-user'>
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username'/>
                    </div>
                    <div className='modal-model-box-input-pass'>
                        <label htmlFor="Password">Password</label>
                        <input type="password" name='Password'/>
                    </div>
                    <div className='modal-model-box-input-pass'>
                        <label htmlFor="Password">confirm Password</label>
                        <input type="password" name='Password'/>
                    </div>
                    <button className='modal-model-but-ing-auth'>Register</button>
                    
                    <p>you Have a account?</p>
                    <a href="/login">Login</a>
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