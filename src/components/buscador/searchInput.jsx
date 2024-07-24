import React, { useState, useRef, useEffect } from "react";


let SearchEd = "";


export const SearchRed = ({activeModal,setActiveModal})=>{
    //Icon active 
    const [activeChild,SetactiveChild ] = useState(false);

    //Logica para que cuando se presione la tecla enter este mismo redireccione hacia la pagina con los resultados de busqueda
  const keyPress = (event) => {
    if (event.key === "Enter") {
      SearchEd !== "" ? localStorage.setItem("search" , SearchEd): null;
      window.location.href = "/search"
    }
  };

  //Logica para tomar lo escrito por el usuario 
  const handleChanged = (event) => {
    SearchEd = event.target.value;

  };

  //Use efecte para recargar el inidicador de modal abierto 
  
    useEffect(() => {
    }, [activeChild,setActiveModal]);

    //logica para cambiar el estado del modal con su propio onclick
    const handleOnClick = (status) => { 
      setActiveModal(status)

      activeChild ? SetactiveChild(false) :  SetactiveChild(true)
    }

    
    return(
        
    
        <div className="input-box">
        <input
          type= "text"
          placeholder=  "Search"
          className=  "inputSearchGeneric"
          //param of keypress
            onChange={handleChanged}
            onKeyDown={keyPress}
        />
          {
            activeChild ? (
              <i class="fa-solid fa-check" onClick={()=>handleOnClick(true)}></i>
            ) : (
              <i class="fa-solid fa-plus" onClick={()=>handleOnClick(false)}></i>
            )
          }
        </div>
    )
}