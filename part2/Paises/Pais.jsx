import React from 'react'
import Weather from './Weather'

function Pais({ pais }) {
    return (
        <>
            <h2>{pais.name.common}</h2>
            <h4>Capital {pais.capital[0]}</h4>
            <h4>poblacion {pais.population} habitantes</h4>
            <h3>Lenguas habladas </h3>
            <ul>
            {(pais.languages !== {} ) &&
                (Object.values(pais.languages).map((language,index)=><li key={index}>{language}</li>))
            }
            </ul>
            <img src={pais.flags.svg} alt={pais.flags.alt} style={{width:'200px', height:'auto'}}/>
            <h3>Tiempo en {pais.capital[0]}</h3>
            <Weather pais={pais}/>
        </>
    )
}

export default Pais
