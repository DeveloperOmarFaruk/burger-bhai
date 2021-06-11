import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useHistory} from 'react-router-dom'
import Map from '../Home/Map/Map'
import './Contact.css'

const Contact = () => {

    const history = useHistory()

    const handleRoute = () =>{
        history.push('./burger-bhai')
    }


    const handleRouteReservation = () =>{
        history.push('./reservation')
    }


    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])


    return (
        <>
            <div className="contact-section">
                <div className="contact-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i class="fas fa-chevron-right"></i>
                    <p>Contact Us</p>
                </div>

                <div className="contact-up-text">
                    <div className=" up-text-left" data-aos="zoom-in-right">
                        <h1>Contact us</h1><br/>
                        <h2>101 Cyril Magnin St, San Francisco, CA 94102, USA</h2><br/>
                        <div className="contact-up-text-tell">
                            TEL:&nbsp;
                            <a href="#">1.555.836.6767</a>
                        </div>
                        <a href="#">developer.omarfaruk@gmail.com</a><br/><br/>
                        <h3>Want to join the team?</h3><br/>
                        <a href="#">Apply today</a>
                    </div>


                    <div className=" up-text-right" data-aos="zoom-in-left">
                        <h1>Opening hours</h1><br/>
                        <h2>Mo-Fr 11:00-00:00<br/>
                        Sa-Su 15:00-00:00</h2><br/>
                        <p>
                            Call us at:<br/>
                            <a href="#">555.329.0632</a>
                        </p>
                        <div className="contact-up-text-btn">
                        <button className='contact-up-btn' type='submit' onClick={handleRouteReservation}>Make an online reservation</button>
                        </div>
                    </div>
                </div>


                <div className="contact-map">
                    <Map/>
                </div>

                <div className="contact-down-text">
                    <div className="contact-down-left col-6" data-aos="zoom-in-right">
                        <h1>Burger Bhai</h1>
                        <p>Visiting our restaurant feels just like paying a visit to your grandpa’s farm… Having a sip of a creamy milkshake, having a bite of a juicy meaty burger… Eating at our place always feels like good old times!</p>
                    </div>


                    <div className="contact-down-right col-6" data-aos="zoom-in-down">
							<div>
								<input className="col2 first" type="text" placeholder="FirstName"/>
								<input className="col2 last" type="text" placeholder="LastName"/>
							</div>
							<div >
								<input  className="col2 first" type="Email" placeholder="Email"/>
								<input className="col2 last" type="text" placeholder="Contact Number"/>
							</div>
							<div >
								<textarea name="textarea"  cols="30" rows="7" placeholder="Your message"></textarea>
							</div>
							<div className="contact-book-btn">
                            <button className='contact-sub-btn' type='submit' >Submit</button>
                            </div>
                    </div>
                    
                
                </div>
            </div>
        </>
    )
}

export default Contact


