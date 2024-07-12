//nav importthis component is the nav
import {NavAdmin} from '../../components/nav/navBarrAdmin.jsx'

import { useEffect, useState } from "react"




const Admin = ()=>{

    const [activeModal,SeActiveModal] = useState(false)

    //Logica para leer en que estado se encuentra el nav,la funcion hace retorno de la option
    const [statusMenue,SetStatusMenue] = useState(null);
    const handleOptionMenue = (option)=>{
        SetStatusMenue(option)
    }

    function active(){activeModal ? SeActiveModal(false) :  SeActiveModal(true)}

    return(
        <div className="AdminCase">
            <h1>Admin</h1>
            <h4>{statusMenue}</h4>
            <button onClick={active}>Active</button>
            
            <NavAdmin modalActived={activeModal} option={handleOptionMenue}/>
        </div>
    )
}

export default Admin;