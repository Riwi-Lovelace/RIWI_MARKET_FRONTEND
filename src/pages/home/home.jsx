import { Header } from '../../components/header/Header.jsx';
import {ModalSesion} from '../../components/modals-sesions/modalLogin.jsx'
import {ModalSesionRegister} from '../../components/modals-sesions/modalRegister.jsx'


const HomeShop = ()=>{
    return(
        <div className="home-shop">
            <Header />
            <h1>Home</h1>
            <div className="home-links">
                <a href="/admin">admin</a>
                <a href="/login">Login</a>
            </div>
          
            <ModalSesion active={false} />
            <ModalSesionRegister activedRegister={false} />

        </div>
    )
}

export default HomeShop;