import { useEffect, useState } from "react"


export const ButRedirect =({text,Link}) =>{

    const [buttonLinked, SetButtonLinked] = useState(null);

    useEffect(() => {
        SetButtonLinked(Link)
    }, [buttonLinked]);

    const redict = () =>{
        window.location.href = buttonLinked;
    }

    return(
        <div className="link-btn-redirect" >
            <button className="btn btn-redirect" onClick={redict}>{text}</button>
        </div>
    )

} 