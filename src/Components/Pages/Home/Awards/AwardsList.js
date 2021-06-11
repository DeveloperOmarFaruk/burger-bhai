import React from 'react'
import './Awards.css'
import Awards from './Awards'

const AwardsList = (props) => {
    const AwardsList = props.data.map(awards => (
        <Awards
        id={awards.id}
        image={awards.image}
        title={awards.title}
        year={awards.year}
        />
    ));

    return (
        <>
            <div className="awards-container">
                <h1>Awards</h1>
                <div className="row award-row">
                    {AwardsList}
                </div>
            </div>
        </>
    )
}

export default AwardsList
