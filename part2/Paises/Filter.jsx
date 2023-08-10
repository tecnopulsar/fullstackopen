import React, { useState } from 'react'

function Filter({ setFilterPais }) {
    const [filter, setFilter] = useState('')

    const handleChangeInput = (e) =>{
        setFilter(e.target.value);
        setFilterPais(e.target.value);
    }

    return (
        <>
            <div>
                <form role='search'>
                    <label htmlFor="inputFilter">Ingrese Pais a buscar</label>
                    <input type="text" name='inputFilter' value={filter} onChange={handleChangeInput} />
                </form>
            </div>
        </>
    )
}

export default Filter