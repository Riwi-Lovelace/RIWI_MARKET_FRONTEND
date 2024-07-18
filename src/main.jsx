
//import react dom 
import React from 'react'
import ReactDOM from 'react-dom/client'

//import router from "npm router Doom -- this import is for active routes in the constructor app"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Componed Contructor Adming Page
import Admin from './pages/admin/admin.jsx'
//Component Page home
import HomeShop from './pages/home/home.jsx'
//Login Page
import Login from './pages/client/Login/Login.jsx'
//register page
import Register from './pages/client/register/register.jsx'
//search Results Page
import Search from './pages/res/resultsPage.jsx'

//used for styles generals
import './custom/gen/generalStyles.css'

import { ProductCategorie } from './pages/productCategories/ProductCategorie.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Router>
     <Routes>
     <Route path="/" element={<HomeShop />} />
     <Route path="admin" element={<Admin />} />
     <Route path="login" element={<Login />} />
     <Route path="register" element={<Register />} />
     <Route path="search" element={<Search />} />
     <Route path='productCategories' element={<ProductCategorie />} />
    </Routes>
    </Router>
  </React.StrictMode>,
)
