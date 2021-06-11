import React from 'react'
import {useHistory} from 'react-router-dom'
import './DropMenu.css'


const content1 = [
    { 
        name: "Coca-Cola-1.25-ltr",
        price: "$ 60",
        description:
        "With something extraordinary",
    },
    { 
        name: "Coca-Cola-250ml",
        price: "$ 38",
        description:
        "With something extraordinary",
    },
    { 
        name: "Sprite-1.25-ltr",
        price: "$ 60",
        description:
        "With something extraordinary",
    },
    { 
        name: "Fanta-1.25-ltr",
        price: "$ 60",
        description:
        "With something extraordinary",
    },
    { 
        name: "Fanta-1Ltr",
        price: "$ 50",
        description:
        "With something extraordinary",
    },
    { 
        name: "Clemon-500ml",
        price: "$ 23",
        description:
        "With something extraordinary",
    },
];




const content2 = [
    { 
        name: "Mojo-500ml",
        price: "$ 23",
        description:
        "With something extraordinary",
    },
    { 
        name: "Fanta- 250ml-CAN",
        price: "$ 38",
        description:
        "With something extraordinary",
    },
    { 
        name: "Schweppes-330ml",
        price: "$ 250",
        description:
        "With something extraordinary",
    },
    { 
        name: "Glucose-D-200gm",
        price: "$ 25",
        description:
        "With something extraordinary",
    },
    { 
        name: "Gatorade_Lemon-515ml",
        price: "$ 250",
        description:
        "With something extraordinary",
    },
    { 
        name: "Starjus-Orange-1ltr",
        price: "$ 260",
        description:
        "With something extraordinary",
    },
    
];


const SoftDrinks = () => {

    const history = useHistory()
    const handleRoute = () =>{
        history.push('../burger-bhai')
    }

    const HandleRoute = () =>{
        history.goBack()
    }

    return (
        <>
            <div className="softDrinks-section">
                <div className="dropMenu-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i class="fas fa-chevron-right"></i>
                    <h1  onClick={HandleRoute}>Menu</h1>
                    <i class="fas fa-chevron-right"></i>
                    <p>Soft Drinks</p>
                </div>

                <div className="softDrinks-background">
                    <h1>Soft Drinks</h1>
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

export default SoftDrinks
