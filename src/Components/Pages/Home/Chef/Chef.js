import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Chef.css'
import Chef2 from '../../../../Images/chef-2.jpg'
import Chef3 from '../../../../Images/chef-3.jpg'
import Chef4 from '../../../../Images/chef-4.jpg'
import Chef5 from '../../../../Images/chef-5.jpg'


const content1 = [
    { 
        picture: Chef2,
        name: "Mexican Burger",
        description:
        "A spicy King of the prairies, this Burger features lots of salty pickles and lots of spicy chili peppers!",
        price: "$ 8.20",
        weight: "/ 400C",
    },
    { 
        picture: Chef4,
        name: "Austrian Burger",
        description:
        "A spicy King of the prairies, this Burger features lots of salty pickles and lots of spicy chili peppers!",
        price: "$ 7.20",
        weight: "/ 400C",
    },
    
];

const content2 = [
    { 
        picture: Chef3,
        name: "Texan Burger",
        description:
        "Proud son of Texas, this Burger is our biggest!",
        price: "$ 6.25",
        weight: "/ 450C",
    },
    { 
        picture: Chef5,
        name: "Indian Burger",
        description:
        "Proud son of Texas, this Burger is our biggest! Its bacon ham and pork cutlets hold a daily dosage of nutrition!",
        price: "$ 9.20",
        weight: "/ 460C",
    },
]

const Chef = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    return (
        <>
            <div className="chef-container">
            <h1>Chef Recommends</h1>
            <div className="chef-info-container" data-aos="zoom-in-down">
                <div className="row">

                {content1.map((item, index) => (

                    <div key={index} className="chef-info">
                    <img src={item.picture} alt={item.picture}/>
                    <div className="chef-text">
                        <h2>{item.name}</h2>
                        <h3>{item.description}</h3>
                        <div className="chef-price">
                            <h4>{item.price}</h4>
                            <p>{item.weight}</p>
                        </div>
                    </div>
                </div>

                ))}
                </div>


                <div className="row">
                    {content2.map((item, index) => (

                        <div key={index} className="chef-info">
                        <img src={item.picture} alt={item.picture}/>
                        <div className="chef-text">
                            <h2>{item.name}</h2>
                            <h3>{item.description}</h3>
                        <div className="chef-price">
                            <h4>{item.price}</h4>
                            <p>{item.weight}</p>
                        </div>
                    </div>
                </div>

            ))}
            </div>
            </div>
            </div>
        </>
    )
}

export default Chef
