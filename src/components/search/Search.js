import React from "react";
import './search.css';
const Search = ({promjenaVrijednostiPolja}) =>{
    return (
        <div className="trazenje">
        <input placeholder="search robot" onChange={promjenaVrijednostiPolja}/>
        </div>
    );
}

export default Search;