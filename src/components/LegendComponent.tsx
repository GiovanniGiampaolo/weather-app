import * as React from 'react';

interface ILegendComponentProps {
}

const LegendComponentFC: React.FC<ILegendComponentProps> = () => {


    return (
        <div className="col-6 my-3 d-flex flex-column">
            <span className="font-weight-bold">LEGEND:</span>
            <span>Cloudy</span>

        </div>
    )
}

export const LegendComponent = LegendComponentFC
