import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css'
import {useHistory} from 'react-router-dom'


const AboutUs = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    const history = useHistory()

    const handleRoute = () =>{
        history.push('./about')
    }

    return (
        <>
            <div className="aboutUs-container">
                <div className="aboutUs">
                <div className="aboutUs-text">
                    <h2 data-aos="zoom-in">While we've initially started our fast food chain as a burger venue, sine those times we've expanded our menu range.</h2>
                </div>

                <div className="aboutUs-btn">
                    <button className='btn' data-aos="zoom-in-up" onClick={handleRoute}>About Us</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs

