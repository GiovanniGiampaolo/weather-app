import * as React from 'react'

interface ITitleComponentProps {
}

const TitleComponentFC: React.FC<ITitleComponentProps> = props => {

    return (
        <div className="mt-3">
            <h3 className="col-12 title-container__title">1980's World Weather app</h3>
            <h6 className="col-12 title-container__subtitle mt-2">Get in real time weather, infos like conditions,
                temperature
                and
                humidity!</h6>
        </div>
    )
}

export const TitleComponent = TitleComponentFC
