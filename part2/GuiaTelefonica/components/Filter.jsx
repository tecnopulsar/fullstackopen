import React, { useState } from 'react'

function Filter({ filterName, setFilterName }) {

    const handleFilterNameChange = (e) => {
        setFilterName(e.target.value)
    }

    return (
        <>
            <h3>filter show with
                <input
                    type='text'
                    placeholder='ingrese nombre a buscar'
                    value={filterName}
                    onChange={handleFilterNameChange} />
            </h3>
        </>
    )
}

export default Filter