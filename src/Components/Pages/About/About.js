import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useHistory} from 'react-router-dom'
import './About.css'
import About1 from '../../../Images/aboutbg-1.jpg'
import About2 from '../../../Images/aboutbg-2.jpg'
import About3 from '../../../Images/aboutbg-3.jpg'
import About4 from '../../../Images/aboutbg-4.jpg'
import AwardsList from '../Home/Awards/AwardsList'
import {AwardData} from '../Home/Awards/AwardData'



const About = () => {

    const history = useHistory()

    const handleRoute = () =>{
        history.push('./burger-bhai')
    }

    const HandleRouteMenu = () =>{
        history.push('./menu')
    }

    const HandleRouteReservation = () =>{
        history.push('./reservation')
    }


    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])


    return (
        <>
            <div className="about-section">
                <div className="about-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i class="fas fa-chevron-right"></i>
                    <p>About</p>
                </div>

                <div className="about-img-text" >
                    <img src={About1} alt={About1}/>
                    <div className="about-text" 
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                        <h1>A long history…</h1>
                        <p>We’re not as old as the original whopper burger recipe, but our restaurant has its own, considerably long spanning timeline… Founded back in 1966, the Burger Palace restaurant is the oldest burger diner in the state. For more than 50 years we were keeping the promise of a delicious, traditional American cuisine!</p>
                    </div>
                </div>

                <div className="about-awards">
                    <AwardsList data={AwardData}/>
                </div>


                <div className="about-middle-img-text">
                    <h2 data-aos="zoom-in-up">Being a burger place first and foremost, we are proud of our diverse lineup!</h2>
                    <img src={About2} alt={About2}/>
                    <div className="about-middle-text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                        <h1>Meet our team</h1>
                        <p>All our staff members work in one team rhythm, making your food experience with us extraordinary! For us the teamwork is a tradition, that unites all the generations of Americans who’ve ever worked here…</p>
                    </div>
                </div>



                <div className="about-owner-img-text">
                    <div className="owner-left">
                        <img src={About3} alt={About3} data-aos="zoom-in-right"/>
                    </div>
                    <div className="owner-right" data-aos="zoom-in">
                        <h1 >Walter Harrison</h1>
                        <h2>President and Chief Executive Officer</h2>
                        <p>Mr. Harrison joined the Company in June 2013 and was named President and Chief Executive Officer of the Company in May 2016. Mr. Harrison previously served as Executive Vice President and Chief Financial Officer of the Company from September 2013 to May 2016. Prior to joining the Company, Mr. Harrison worked at Kellogg…</p>
                        <div className="owner-social">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>


                <div className="about-owner-img-text">
                    <div className="owner-left" >
                        <img src={About4} alt={About4} data-aos="zoom-in-right"/>
                    </div>
                    <div className="owner-right" data-aos="zoom-in">
                        <h1>Darren Willis</h1>
                        <h2>Chief Concept and Marketing Officer</h2>
                        <p>Darren joined the company in May 2015 and is the Chief Concept & Marketing Officer with responsibility for all marketing, digital and culinary innovation. Prior to joining Wendy’s, he held several different leadership positions within the food and beverage space that provided him a broad and deep perspective on how to</p>
                        <div className="owner-social">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>


                <div className="about-last-text">
                    <h1>Recent Press</h1>
                    <div className="last-text">
                        <a href="#">Washington Post – Feature</a>
                        <a href="#">City Paper – Review</a>
                        <a href="#">Alexandria Sun – Review</a>
                        <a href="#">City Paper – Soft Opening Gallery</a>
                    </div>
                    <p>
                        View &nbsp;
                        <a href="#" onClick={HandleRouteMenu}>The Menus</a>
                        and &nbsp;
                        <a href="#" onClick={HandleRouteReservation}>Make A Reservation</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
