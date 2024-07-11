//nav importthis component is the nav
import {NavAdmin} from '../../components/nav/navBarrAdmin.jsx'

import { useEffect, useState } from "react"




const Admin = ()=>{

    const [activeModal,SeActiveModal] = useState(false)

    function active(){activeModal ? SeActiveModal(false) :  SeActiveModal(true)}

    return(
        <div className="AdminCase">
            <h1>Admin</h1>
            <button onClick={active}>Active</button>
            
            <NavAdmin modalActived={activeModal}/>
        </div>
    )
}

export default Admin;