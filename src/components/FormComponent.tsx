import * as React from 'react'

interface IFormComponentProps {
    getWeather: any
}

const FormComponentFC: React.FC<IFormComponentProps> = (props: IFormComponentProps) => {

    return (
        <form className="col-12 mt-3" onSubmit={props.getWeather}>
            {/* CITY INPUT*/}
            <input type="text"
                   name="city"
                   placeholder="Insert city"
            />

            {/* COUNTRY INPUT*/}
            <input type="text"
                   name="country"
                   placeholder="Inserisci country"/>

            {/* SUBMIT */}
            <button className="text-uppercase" type={'submit'}>Find</button>
        </form>
    )
}

export const FormComponent = FormComponentFC
