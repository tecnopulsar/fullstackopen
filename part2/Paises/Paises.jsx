import React, { useEffect, useState } from 'react'
import Pais from './Pais'

function Paises({ paises, filterPais }) {
    const [paisesFiltrados, setPaisesFiltrados] = useState([])

useEffect(() => {
        const newFiltradoPaises = paises.filter((pais) => pais.name.common.toLowerCase().includes(filterPais.toLowerCase()))
        setPaisesFiltrados(newFiltradoPaises)
    }, [filterPais])

    const handleClick = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <div>Paises Filtrados por nombre</div>

            {(paisesFiltrados.length === 0) &&
                <div>Paises sin Filtrar</div>}
            {(paisesFiltrados.length > 10) &&
                <div>Mas de 10 paises encontrados, mejorar el filtrado</div>}
            {((paisesFiltrados.length <= 10) && (paisesFiltrados.length > 1)) &&
                paisesFiltrados.map((pais, index) => {
                    return <div
                        key={index}
                        style={{ display: 'flex', justifyContent: 'space-between' }}
                    >{pais.name.common}
                        <button onClick={handleClick} value={pais.name.common}>Show</button></div>
                })
            }
            {(paisesFiltrados.length === 1) &&
                <Pais pais={paisesFiltrados[0]} />}
        </>
    )
}

export default Paises
