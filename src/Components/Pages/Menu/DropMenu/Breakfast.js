import React from 'react'
import {useHistory} from 'react-router-dom'
import './DropMenu.css'

const content1 = [
    { 
        name: "Eggs Benedict at Indigo Deli",
        price: "$ 23",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    { 
        name: "Elvis Bagel at The Bagel Shop",
        price: "$ 12",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    { 
        name: "Just Juice Bangladesh",
        price: "$ 10",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    { 
        name: "Full House at Leaping Windows",
        price: "$ 6",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    { 
        name: "Breakfast Buffet at Cafe Prato",
        price: "$ 17",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    { 
        name: "Batata Vada at Prakash",
        price: "$ 13",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
];



const content2 = [
    { 
        name: "Hungover Breakfast Tray",
        price: "$ 23",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    { 
        name: "The White Canary Cafe",
        price: "$ 38",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    { 
        name: "Irani Wrestler’s Omelette at Koolar & Co.",
        price: "$ 25",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    { 
        name: "Muesli at Kala Ghoda Cafe",
        price: "$ 22",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    { 
        name: "Creme de la Creme Coffee",
        price: "$ 15",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    { 
        name: " Seasonal Tastes",
        price: "$ 11",
        description:
        "Had a breakfast in latitude 23 and Nadi...",
    },
    
];

const Breakfast = () => {

    const history = useHistory()
    const handleRoute = () =>{
        history.push('../burger-bhai')
    }

    const HandleRoute = () =>{
        history.goBack()
    }


    return (
        <>
            <div className="breakfast-section">
                <div className="dropMenu-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i class="fas fa-chevron-right"></i>
                    <h1  onClick={HandleRoute}>Menu</h1>
                    <i class="fas fa-chevron-right"></i>
                    <p>Breakfast</p>
                </div>


                <div className="breakfast-background">
                    <h1>Breakfast</h1>
                </div>

                <div className="price-items-list-section">
                    <div className="col-6">
                    {content1.map((item, index) => (
                        <li key={index} className='price-items-list-container'>
                        <div className="price-items-list-text">
                            <h5>{item.name}</h5>
                            <div className='price-items-list-dot'></div>
                            <p>{item.price}</p>
                        </div>

                        <h4 className="price-items-list-description">
                            {item.description}
                        </h4>
                    </li>

                    ))}
                    </div>



                    <div className="col-6">
                    {content2.map((item, index) => (
                        <li key={index} className='price-items-list-container'>
                        <div className="price-items-list-text">
                            <h5>{item.name}</h5>
                            <div className='price-items-list-dot'></div>
                            <p>{item.price}</p>
                        </div>

                        <h4 className="price-items-list-description">
                            {item.description}
                        </h4>
                    </li>

                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breakfast
