
import { useState } from "react"

//Buttom component textFlexible
import {But} from '../buttons/buttomComponent.jsx'

//Imports styles from this component
import './navAdddGeneral.css'

//asset for logo 
import imgage from '../../assets/logo/Logos.webp'
// button reutilizable
import {ButtonsAdmin} from '../../utils/interactiveButtons/buttons-intertive.jsx'





export const NavAdmin =()=>{

    const [isPress,SetPress] = useState("disable");

  

    return(
        <div className="nav-admin">
                <div className='Logo'>
                    <div className='image'>
                        <img src={imgage} alt="" />
                    </div>
                </div>
                <div className='actions-but-admin' onClick={userOptionGetClick}>
                  
                    <ButtonsAdmin icons = {<i class="fa-regular fa-user"></i>} text = "user" select = {isPress}  />
                    

                </div>
                <div className='btn-logout'>

                </div>

        </div>
    )
}
