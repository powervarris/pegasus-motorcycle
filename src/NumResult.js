import React from 'react';
import "./Result.css";


function NumResult ({filteredData}) {
    return (
        <p className="result">
            Found <h4 className="number">{filteredData.length}</h4> results
        </p>
    )
}

export default NumResult;