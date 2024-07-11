import { useEffect } from "react";
import { useState } from "react"

export const ButtonsAdmin = ({icons , text, select}) => {

    
    const [active,setActive] = useState(false);


    useEffect(() => {
        select == "Active" ?  setActive(true) : setActive(false);
      }, []);

    return(
        active ? (      
            <div className="buttonsAdmin select">
                {icons}<p>{text}</p>
            </div>
            ):(
           <div className="buttonsAdmin">
                {icons}<p>{text}</p>
            </div>
            )
    )
}
