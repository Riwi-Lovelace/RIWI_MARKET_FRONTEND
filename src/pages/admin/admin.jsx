//nav importthis component is the nav
import {NavAdmin} from '../../components/nav/navBarrAdmin.jsx'

import { useEffect, useState } from "react"

// import list generic,primer param es para el numero de fiklas que este mismo tendra,y y el segundo todod los valores que iran en cada una de las filas
import {List} from './components/listGeneric.jsx'

//Estilos generales del admin
import './css/stylesAdmin.css'

//componente de busqueda
import {SearchRed} from '../../components/buscador/searchInput.jsx'


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
              <button onClick={active}>Active</button>
              <h1>Admin</h1>
              <h4>{statusMenue}</h4>
            <div className='container'>
                <NavAdmin modalActived={activeModal} option={handleOptionMenue}/>

                <div className='containerSectionInfo'>
                    <SearchRed />
                    <List filasNumber={listAdminSee} arrayValues={ValuesOfTable} />
                </div> 
            </div>
           

        </div>
    )
}

export default Admin;