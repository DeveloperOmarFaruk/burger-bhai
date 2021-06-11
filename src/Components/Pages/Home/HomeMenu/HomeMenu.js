import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  './HomeMenu.css'
import Menu1 from '../../../../Images/menu-1.png'
import Menu2 from '../../../../Images/menu-2.jpg'
import Menu3 from '../../../../Images/menu-3.jpg'
import Menu4 from '../../../../Images/menu-4.jpg'
import Menu5 from '../../../../Images/menu-5.jpg'
import {useHistory} from 'react-router-dom'

const HomeMenu = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    
    const history = useHistory()

    const handleRoute = () =>{
        history.push('./menu')
    }


    const handleRouteBurgers = () =>{
        history.push('./menu/burgers')
    }

    const handleRouteBreakfast = () =>{
        history.push('./menu/breakfast')
    }


    const handleRouteSaladFires = () =>{
        history.push('./menu/saladFries')
    }

    const handleRouteSoftDrinks = () =>{
        history.push('./menu/softDrinks')
    }

    return (
        <>
            <div className='home-menu-container'>
                <h1>Menu</h1>

                <div className="home-menu">
                <div className="col-6 home-left-menu">
                    <img  data-aos="fade-right" className='full-image' src={Menu1} alt='menu-pic'/>
                    <p data-aos="zoom-in">Being a burger place first and foremost, we are proud of our diverse lineup! Our juicy, meaty and spicy set of traditional American beef, chicken & fish burgers is what we do the best!</p>
                    <div className="home-left-menu-btn">
                    <a data-aos="zoom-out-up" className='full-btn' href="#" onClick={handleRoute} >Full Menu</a>
                    </div>
                </div>


                <div className="col-6 home-right-menu">

                    <div className="middle-up">
                    <div className="middle" data-aos="zoom-in" >
                        <img className='image' src={Menu2} alt='' onClick={handleRouteBurgers}/>
                        <div className="middle-text">
                            <a href="" onClick={handleRouteBurgers}>Burgers</a>
                        </div>
                        </div>


                        <div className="middle" data-aos="zoom-in">
                        <img  className='image'  src={Menu4} alt='' onClick={handleRouteBreakfast}/> 
                        <div className="middle-text">
                            <a href=""  onClick={handleRouteBreakfast}>Breakfast</a>
                        </div>
                        </div>
                    </div>
                        
                    



                    <div className="middle-down">
                        <div className="middle" data-aos="zoom-in">
                        <img className='image'  src={Menu3} alt=''  onClick={handleRouteSaladFires}/>
                        <div className="middle-text">
                            <a href=""  onClick={handleRouteSaladFires}>Salads & Fires</a>
                        </div>
                        </div>


                        <div className="middle" data-aos="zoom-in">
                        <img  className='image' src={Menu5} alt=''  onClick={handleRouteSoftDrinks}/>
                        <div className="middle-text">
                            <a href=""  onClick={handleRouteSoftDrinks}>Soft Drinks</a>
                        </div>
                        </div>
                    </div>
                        

                </div>
                </div>
            </div>
        </>
    )
}

export default HomeMenu
