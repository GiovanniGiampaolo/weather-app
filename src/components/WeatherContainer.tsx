import * as React from 'react'
import {useState} from 'react'
import {FormComponent} from './FormComponent'
import {TitleComponent} from './TitleComponent'
import {WeatherComponent} from './WeatherComponent'
import {IWeather} from './utils/weather-types'
import {API_FETCH_KEY, FETCH_BASE_URL} from './utils/wather-consts'

interface IWeatherContainerJsProps {
}

const WeatherContainerFC: React.FC<IWeatherContainerJsProps> = () => {

    const [weather, setWeather] = useState<IWeather | undefined>(undefined)

    const getWeather = async (e: any) => {
        e.preventDefault()
        const city = e.target.elements.city.value
        const country = e.target.elements.country.value

        const api_call = await fetch(`${FETCH_BASE_URL}${city},${country}&appid=${API_FETCH_KEY}&units=metric`)

        const data = await api_call.json()

        // console.debug('RESPONSE => ', data)

        if (city && country) {
            setWeather({
                temperature: data?.main?.temp,
                city: data?.name,
                country: data?.sys?.country,
                humidity: data.main?.humidity,
                description: data?.weather[0]?.description,
                error: ''
            })
        } else setWeather({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: 'Città non trovata'
        })
    }

    return (
        <div className="container p-3" style={{border: '2px dashed black', marginTop: 30, height: '100%'}}
             id={'weather-container'}>

            {/* TITLE */}
            <TitleComponent/>

            {/* FORM */}
            <FormComponent getWeather={getWeather}/>

            {/* WEATHER */}
            {!!weather && <WeatherComponent locationResult={weather}/>}

        </div>
    )
}

export const WeatherContainer = WeatherContainerFC
