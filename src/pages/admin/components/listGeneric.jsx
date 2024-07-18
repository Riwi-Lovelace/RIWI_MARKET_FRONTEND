import { useEffect, useState } from "react"


//css del componente
import './css/componentList.css'

export const List = ({filasNumber,arrayValues})=>{


    const [HeadTable, SetHeadTable] = useState([]);
    const [valuesTable, SetvaluesTable] = useState([]);

    useEffect(() => {
        SetHeadTable(filasNumber)
        SetvaluesTable(arrayValues)
    }, [filasNumber,valuesTable]);

    
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
                    {valuesTable.map((value, index) => (
                        <th key={index}>{value}</th>
                    ))}
                </tr>
            </tbody>
        </table>
    </div>
    )
}