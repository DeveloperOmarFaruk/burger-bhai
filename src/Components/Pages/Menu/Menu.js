import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Menu.css'
import {useHistory} from 'react-router-dom'
import FullMenu from '../../../Images/FullMenu.pdf'
import Menu2 from '../../../Images/menu-2.jpg'
import Menu3 from '../../../Images/menu-3.jpg'
import Menu4 from '../../../Images/menu-4.jpg'
import Menu5 from '../../../Images/menu-5.jpg'



const content = [
    {
            
        pic: Menu2,
        title: "Burgers",
        description:
        "While a majority of Americans enjoy eating Burgers at any time of the day or a week, not many people think about how many ingredients go into making a single...",
    },
    { 
        
        pic: Menu4,
        title: "Breakfast",
        description:
        "Being on time to catch breakfast at our place feels just like winning a lottery! A delicious lottery, consisting of freshly cooked, hot hash browns, muffins, and fried eggs with bacon! Do not miss out your perfect breakfast the next morning...",
    },
    { 
        
        pic: Menu3,
        title: "Salads & Fires",
        description:
        "We have a lot of traditional American Salads &amp; French Fries to offer...",
    },
    { 
        
        pic: Menu5,
        title: "Soft Drinks",
        description:
        "We offer a whole multitude of drinks, starting with hot black coffee and hot black tea and finishing with some cold refreshing soda drinks and icy &amp; creamy milkshakes...",
    },
    
];





const Menu = () => {

    const history = useHistory()

    const handleRoute = () =>{
        history.push('./burger-bhai')
    }


    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    
    return (
        <>
            <div className="menu-section">
                <div className="menu-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i class="fas fa-chevron-right"></i>
                    <p>Menu</p>
                </div>

                <div className="grid">
                {content.map((item, index) => (
                <figure
                    key={index}
                    className='effect-layla'>
                                
                                    <img  src={item.pic} alt={item.pic}  onClick={handleRoute}/>
                                    <figcaption>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </figcaption>
                </figure>
                ))}
                </div>

                <div className="menu-list">
                    <a href={FullMenu} className='full-menu' data-aos="zoom-in">Download the Full Menu (.pdf)</a>
                </div>
            </div>
        </>
    )
}

export default Menu
