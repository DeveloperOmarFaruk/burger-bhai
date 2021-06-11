import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Interior.css'
import {useHistory} from 'react-router-dom'


const Interior = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    const History = useHistory()

    const HandleRoute = () =>{
        History.push('./gallery')
    }

    return (
        <>
            <div className="interior-container">
                <div className="col-6">

                </div>

                <div className="col-6">
                    <div className="interior-text">
                        <h1 data-aos="zoom-in">Interior</h1>
                        <p data-aos="zoom-in-up">In our restaurant interior, we tend to stay just as traditionally Amercian as with everything else we do!</p>
                        <div className="interior-btn">
                            <button data-aos="zoom-in-down" className='btn' onClick={HandleRoute}>Gallery</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interior
