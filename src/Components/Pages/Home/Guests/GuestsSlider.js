import React from 'react'

import './Guests.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import Thom from '../../../../Images/guest-1.jpg'
import Jonas from '../../../../Images/guest-2.jpg'
import Miang from '../../../../Images/guest-3.png'





const content = [
    { 
        userProfile: Thom,
        user: "Thom",
        title: "Posted on Tripadvisor",
        description:
        "Their selection of tasty burgers and healthy salads makes it a perfect combination for any visitor!",
    },
    { 
        userProfile: Jonas,
        user: "Jonas",
        title: "Posted on Tripadvisor",
        description:
        "Tasting their burgers is one of my favorite experiences during the working week, each time I have a lunch!",
    },
    { 
        userProfile: Miang,
        user: "Miang",
        title: "Posted on Tripadvisor",
        description:
        "Whenever I’m passing by the street where their burger restaurant is I can’t help myself but order a lunch!",
    },
    
];




const GuestsSlider = () => {

    return (
        <>  
            <div className="guests-container">
            <h1>Happy Guests</h1>
            <OwlCarousel
            items={1}
            loop={true}
            nav={false}
            autoplay={true}
            margin={1}
            className="row">
            {content.map((item, index) => (
                <div
                    key={index}
                    className="guests-row"
                >
                                <div className="guests-intro">
                                    <img className="guests-image" src={item.userProfile} alt={item.user}/>
                                    <div className="gusts-intro-text">
                                        <h2>{item.user}</h2>
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
        
                                <div className="gusts-details">
                                    <p>{item.description}</p>
                                </div>
                </div>
                ))}
            </OwlCarousel>
            
            </div>
        </>
    )
}

export default GuestsSlider
