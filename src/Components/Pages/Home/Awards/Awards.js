import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Awards.css'



const Awards = (props) => {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])


    return (
        <>
            <div className="col-3 award-col">
                        <div className="award-logo">
                            <img src={props.image} alt='awards' data-aos="zoom-in-down"/>
                        </div>
                        
                        <div className="award-text">
                            <h2 data-aos="zoom-in">{props.title}</h2>
                            <p data-aos="flip-up">{props.year}</p>
                        </div>
                    </div>
        </>
    )
}

export default Awards
