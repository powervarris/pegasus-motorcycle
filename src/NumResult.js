import React from 'react';


function NumResult ({filteredData}) {
    return (
        <p style={{color:'white'}}>
            Found <strong>{filteredData.length}</strong> results
        </p>
    )
}

export default NumResult;