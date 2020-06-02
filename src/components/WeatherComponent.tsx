import * as React from 'react'
import {IWeather} from './utils/weather-types'
import {LegendComponent} from './LegendComponent'

interface IWeatherComponentProps {
    locationResult: IWeather
}

const WeatherComponentFC: React.FC<IWeatherComponentProps> = (props: IWeatherComponentProps) => {

    const {locationResult} = props

    const isResponseErrorFree = locationResult.error.length

    return <div className="container-fluid row">

        {/* RESULTS DATA */}
        <div className="col-12 my-3 d-flex flex-column">
            {!isResponseErrorFree ?
                <>
                    <h6 className="font-weight-bold"> Risultati:</h6>

                    {/* LOCATION */}
                    {props.locationResult.city &&
                    <span>Location: <b>{props.locationResult.city}</b></span>}

                    {/* DESCRIPTION */}
                    {props.locationResult.description &&
                    <span className="text-capitalize">What's going on: <b>{props.locationResult.description}</b></span>}

                    {/* HUMIDITY */}
                    {props.locationResult.humidity &&
                    <span>Humidity: <b>{props.locationResult.humidity}</b>%</span>}

                    {/* TEMPERATURE */}
                    {props.locationResult.temperature &&
                    <span>Temperature: <b>{props.locationResult.temperature}</b>°</span>}
                </>
                :
                <span className={'weather__error'}>
                Errors during fetching data, chech if you insert city and country both.
            </span>
            }
        </div>

        {/* LEGEND */}
        {!isResponseErrorFree && false && <LegendComponent/>}
    </div>
}

export const WeatherComponent = WeatherComponentFC
