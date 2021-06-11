import React,{useEffect} from 'react'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useHistory} from 'react-router-dom'


const Header = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    const history = useHistory()

    const handleRoute = () =>{
        history.push('./reservation')
    }

    return (
        <>
            <div className="header-container">
                <div className="header">
                <div className="header-text">
                    <p data-aos="fade-down" >Welcome to the</p>
                    <h1 data-aos="fade-right">Burger Bhai Restaurant</h1>
                    <h3 data-aos="fade-up">Best Burgers in the Sate are Waiting to be Eaten Right Here!</h3>
                    <h3 data-aos="fade-up">Book a table or call us at: 555.123.4567</h3>
                </div>

                <div className="header-btn">
                    <button className='btn' onClick={handleRoute}>Book a Table</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Header
