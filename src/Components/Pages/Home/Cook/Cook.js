import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Cook.css'
import {useHistory} from 'react-router-dom'

const Cook = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    const history = useHistory()

    const handleRoute = () =>{
        history.push('./about')
    }

    return (
        <>
            <div className="cook-container">
                    <div className="col-6">
                        
                    </div>
                    <div className="col-6">
                        <h1 data-aos="zoom-in">Colonel Jonathan South</h1>
                        <h2 data-aos="zoom-in-up" >Burger Palace owner</h2>
                        <p data-aos="zoom-in-up">
                        As a former US army Colonel, I can give you a word, that whatever you see on the menu will be exactly the same stuff that you will be served with at our place! For me personally, the unyielding quality of all the ingredients that we use in our dishes is vital! Come on in for a burger!
                        </p>

                        <div className="ourTeam-btn">
                            <button data-aos="fade-up"
                            data-aos="zoom-in-down" className='btn' onClick={handleRoute}>Our Team</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Cook
