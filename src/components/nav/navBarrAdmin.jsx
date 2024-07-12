import { useEffect, useState } from "react"

// Import Button component
import { But } from '../buttons/buttomComponent.jsx'

// Import styles from this component
import './navAdddGeneral.css'

// Asset for logo 
import imgage from '../../assets/logo/Logos.webp'

// Reusable button component
import { ButtonsAdmin } from '../../utils/interactiveButtons/buttons-intertive.jsx'

export const NavAdmin = ({modalActived,option}) => {
    const [activeButton, setActiveButton] = useState(null);

    const [modalActive, SetmodalActive] = useState(true);

    const handleButtonClick = (buttonName) => {
        const newActiveButton = activeButton === buttonName ? null : buttonName;
        setActiveButton(newActiveButton);
        if (option) {
            option(newActiveButton);
        }
    };

    useEffect(() => {
    }, [activeButton]);

    useEffect(() => {
        SetmodalActive(modalActived == true);
    }, [modalActived,option]);


    const navAdminClassName = `nav-admin ${modalActive ? 'anotherClass' : ''} ${modalActive ? 'open-modal-nav' : 'close-modal-nav'}`;

    return (
        <div className={navAdminClassName}>
            <div className='Logo'>
                <div className='image'>
                    <img src={imgage} alt="" />
                </div>
            </div>
            <div className='actions-but-admin'>
                <div className="btnOptionAdmin btn-user" onClick={() => handleButtonClick("user")}>
                    <ButtonsAdmin icons={<i className="fa-regular fa-user"></i>} text="user" select={activeButton === "user" ? "Active" : "disable"} />
                </div>
                <div className="btnOptionAdmin btn-carr" onClick={() => handleButtonClick("shop")}>
                    <ButtonsAdmin icons={<i className="fa-solid fa-cart-shopping"></i>} text="Shop" select={activeButton === "shop" ? "Active" : "disable"} />
                </div>
                <div className="btnOptionAdmin btn-cont" onClick={() => handleButtonClick("contability")}>
                    <ButtonsAdmin icons={<i className="fa-solid fa-box"></i>} text="Contability" select={activeButton === "contability" ? "Active" : "disable"} />
                </div>
            </div>
            <div className='btn-logout'>
                <div className="buttonsAdmin">
                    <i className="fa-solid fa-right-from-bracket"></i><p>Logout</p>
                </div>
            </div>
        </div>
    )
}
