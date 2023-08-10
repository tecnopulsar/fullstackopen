import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Weather({ pais }) {

    const [tiempo, setTiempo] = useState({
        "temp_c": 'sin datos',
        "condition": {
            "text": 'sin datos',
            "icon": 'sin datos',
        },
    })
    const api_key = import.meta.env.VITE_API_KEY
    const capital = pais.capital[0];

    const UrlWeather = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${capital}&aqi=no`

    // "current": {
    //     "last_updated_epoch": 1691669700,
    //     "last_updated": "2023-08-10 09:15",
    //     "temp_c": 14.0,
    //     "temp_f": 57.2,
    //     "is_day": 1,
    //     "condition": {
    //         "text": "Sunny",
    //         "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
    //         "code": 1000
    //     },

    useEffect(() => {
        axios
            .get(UrlWeather)
            .then(response => {
                setTiempo(response.data.current)
            })
    }, [])
    console.log(tiempo)
    return (
        <div>
            <div>Temperatura {tiempo.temp_c} ºC</div>
            <div>Cielo {tiempo.condition.text} </div>
            <img src={tiempo.condition.icon} />
        </div>
    )
}

export default Weather