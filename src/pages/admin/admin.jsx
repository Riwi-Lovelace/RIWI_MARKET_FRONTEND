//nav importthis component is the nav
import {NavAdmin} from '../../components/nav/navBarrAdmin.jsx'

import { useEffect, useState } from "react"

<<<<<<< HEAD
// import list generic,primer param es para el numero de fiklas que este mismo tendra,y y el segundo todod los valores que iran en cada una de las filas
import {List} from './components/listGeneric.jsx'
=======
import ModalAdminInfoComponent from '../../components/modals/modalAdminInfo.jsx'

>>>>>>> edafea2ceee88d9c3ae189d480eb6d7f67fdfffa

//Estilos generales del admin
import './css/stylesAdmin.css'

const Admin = ()=>{


    const listAdminSee = ["id","precio","nombre"]

    const ValuesOfTable = ["1","1.20","Harol"]


    const [activeModal,SeActiveModal] = useState(false)

    //Logica para leer en que estado se encuentra el nav,la funcion hace retorno de la option
    const [statusMenue,SetStatusMenue] = useState(null);
    const handleOptionMenue = (option)=>{
        SetStatusMenue(option)
    }

    function active(){activeModal ? SeActiveModal(false) :  SeActiveModal(true)}

    return(
        <div className="AdminCase">
<<<<<<< HEAD
              <button onClick={active}>Active</button>
              <h1>Admin</h1>
              <h4>{statusMenue}</h4>
            <div className='container'>
                <NavAdmin modalActived={activeModal} option={handleOptionMenue}/>
                <List filasNumber={listAdminSee} arrayValues={ValuesOfTable} />
            </div>
           

=======
            <h1>Admin</h1>
            <h4>{statusMenue}</h4>
            <button onClick={active}>Active</button>
            
            <NavAdmin modalActived={activeModal} option={handleOptionMenue}/>

            <ModalAdminInfoComponent/>
>>>>>>> edafea2ceee88d9c3ae189d480eb6d7f67fdfffa
        </div>
    )
}

export default Admin;