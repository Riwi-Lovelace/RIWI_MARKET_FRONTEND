import { useEffect, useState } from "react"

const Search = ()=>{

    const [Search, setSearch] = useState(null);

    useEffect(() => {
        setSearch(localStorage.getItem("search"))
    }, [Search]);

    return(
        <div className="search">
            <h1>{Search}</h1>
        </div>
    )
}

export default Search;