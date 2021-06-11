import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useHistory} from 'react-router-dom'
import './Reservation.css'
import Table1 from '../../../Images/table-1.webp'
import Table2 from '../../../Images/table-2.webp'
import Table3 from '../../../Images/table-3.webp'
import Table4 from '../../../Images/table-4.webp'
import Table5 from '../../../Images/table-5.webp'
import Table6 from '../../../Images/table-6.webp'
import Table8 from '../../../Images/table-8.webp'
import Table9 from '../../../Images/table-9.webp'
import Table10 from '../../../Images/table-10.webp'





const images1 = [
    {
        pic:Table1,
    },
    {
        pic:Table2,
    },
    {
        pic:Table3,
    },
]



const images2 = [
    {
        pic:Table4,
    },
    {
        pic:Table5,
    },
    {
        pic:Table6,
    },
]



const images3 = [
    {
        pic:Table4,
    },
    {
        pic:Table8,
    },
    {
        pic:Table9,
    },
    {
        pic:Table10,
    },
]




const Reservation = () => {

    const history = useHistory()

    const handleRoute = () =>{
        history.push('./burger-bhai')
    }


    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])



    return (
        <>
            <div className="reservation-section">
                <div className="reservation-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i class="fas fa-chevron-right"></i>
                    <p>Reservation</p>
                </div>


                <div className="reservation-up-text">
                    <h1>Table Reservation</h1>
                    <h3>The Burger Palace is the place for any event where a food can be featured!</h3>
                    <p >So be it a business meeting lunch, a family birthday dinner, anniversary or a proposal romantic dinner or any other event, we will make sure the atmosphere and dishes fit the occasion!</p>
                </div>


                <div className='reservation-image'>

                <div className="reservation-row">
                {images1.map((item, index) => (
                    <div className="reservation-row-1" key={index}>
                    <img src={item.pic} alt={item.pic}/>
                    </div>
                ))}
                </div>


                <div className="reservation-row">
                {images2.map((item, index) => (
                    <div className="reservation-row-2" key={index}>
                    <img src={item.pic} alt={item.pic}/>
                    </div>
                ))}
                </div>


                <div className="reservation-row">
                {images3.map((item, index) => (
                    <div className="reservation-row-3" key={index}>
                    <img src={item.pic} alt={item.pic}/>
                    </div>
                ))}
                </div>

                </div>



                <div className="reservation-down-text" data-aos="zoom-in-down">
                    <h3>We are always ready to meet all your needs and requirements during the night time.</h3>
                    <p>Please call 555.329.0632 or fill out the contact form and we will call back to you ASAP.</p>
                </div>



                <div className="reservation-contact" data-aos="zoom-in">
                    <div className="reservation-contact-row-1">
                        <div className="col-6 res-input">
                            <label>Your Name</label>
                            <input type='text' name='name'/>
                        </div>

                        <div className="col-6 res-input ">
                            <label>Your Phone</label>
                            <input type='text' name='phone'/>
                        </div>
                    </div>



                    <div className="reservation-contact-row-2 res-input">
                    <label className='comments'>Comments: time, number of regions, suggestions</label>
                    <textarea type='text' name='comments'/>
                    </div>

                    <div className="reservation-book-btn">
                    <button className='book-btn' type='submit' >book</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reservation


