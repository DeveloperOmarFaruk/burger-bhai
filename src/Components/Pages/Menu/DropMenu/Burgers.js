import React from 'react'
import {useHistory} from 'react-router-dom'
import './DropMenu.css'



const content1 = [
    { 
        name: "Mexican Burger / 400C",
        price: "$ 8.20",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Austrian Burger / 400C",
        price: "$ 7.20",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Texan Burger / 450C",
        price: "$ 6.25",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Indian Burger / 460C",
        price: "$ 9.20",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Tandoori Zinger Burger / 450C",
        price: "$ 9.10",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Big Zing Trio / 460C",
        price: "$ 10.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "BBQ Whopper / 400C",
        price: "$ 8.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Long Cheese Burger / 450C",
        price: "$ 10.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Chicken Nuggets / 400C",
        price: "$ 8.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
];




const content2 = [
    { 
        name: "Spicy Zinger / 400C",
        price: "$ 9.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Classic Zinger / 400C",
        price: "$ 6.10",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Buddy Zinger Combo / 400C",
        price: "$ 15.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Super Charger Burger / 400C",
        price: "$ 9.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Whopper / 460C",
        price: "$ 11.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Cheese Burger / 400C",
        price: "$ 8.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Double Cheese Burger / 400C",
        price: "$ 15.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Chick N Crisp / 400C",
        price: "$ 9.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    { 
        name: "Chicken Nuggets / 400C",
        price: "$ 7.00",
        description:
        "Kids beef cheese burger, 2 pcs chicken nuggets, small fries & small drinks",
    },
    
];

const Burgers = () => {

    const history = useHistory()
    const handleRoute = () =>{
        history.push('../burger-bhai')
    }

    const HandleRoute = () =>{
        history.goBack()
    }

    return (
        <>
            <div className="burgers-section">
                <div className="dropMenu-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i class="fas fa-chevron-right"></i>
                    <h1  onClick={HandleRoute}>Menu</h1>
                    <i class="fas fa-chevron-right"></i>
                    <p>Burgers</p>
                </div>


                <div className="burgers-background">
                    <h1>Burgers</h1>
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

export default Burgers
