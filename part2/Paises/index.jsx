import React, { useEffect, useState } from 'react'
import Paises from './Paises';
import Filter from './Filter';
import DBpaises from './DBpaises'
import axios from 'axios';


function index() {
    const [paises, setPaises] = useState([])
    const [filterPais, setFilterPais] = useState('')

    // useEffect(() => {
    //     axios
    //         .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    //         .then(response => {
    //             setPaises(response.data);
    //         })
    // }, [])
    useEffect(() => {
        setPaises(DBpaises)
        }, [])

    return (
        <>
            <Filter setFilterPais={setFilterPais} />
            <Paises paises={paises} filterPais={filterPais}/>
        </>

    )
}

export default index