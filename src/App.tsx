import * as React from 'react'
import './App.scss'
import {WeatherContainer} from './components/WeatherContainer'

interface IAppProps {
}

const AppFC: React.FC<IAppProps> = (props) => {

    return (
        <div id={'main-container'} className={'container'}>

            {/* WEATHER CONTAINER */}
            <WeatherContainer/>

        </div>
    )
}

export const App = AppFC
