import { useEffect, useState } from "react"


//css del componente
import './css/componentList.css'

export const List = ({filasNumber,arrayValues})=>{


    const [HeadTable, SetHeadTable] = useState([]);

    useEffect(() => {
        SetHeadTable(filasNumber)
    }, [filasNumber]);

    
    return(
        <div className="list">
        <table className="table-listGeneric" border={1}>
            <thead>
                <tr>
                    {HeadTable.map((value, index) => (
                        <th key={index}>{value}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th> Hola </th>
                    <th> Hola </th>
                    <th> Hola </th>
                </tr>
            </tbody>
        </table>
    </div>
    )
}