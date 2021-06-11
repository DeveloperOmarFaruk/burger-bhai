import React from 'react'
import {useHistory} from 'react-router-dom'
import './DropMenu.css'




const content1 = [
    { 
        name: "APPLE & CELERY SALAD / plate",
        price: "$ 22",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "BEETROOT SALAD / plate",
        price: "$ 19",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "BABY POTATO SALAD / plate",
        price: "$ 16",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "BOWTIE PASTA / plate",
        price: "$ 16",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "BROWN RICE & LENTIL SALAD /plate",
        price: "$ 19",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "CARROT & PINEAPPLE SALAD / plate",
        price: "$ 16",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "CURRIED BEAN SALAD / plate",
        price: "$ 18",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "CURRIED CARROT SALAD / plate",
        price: "$ 25",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "FOUR BEAN SALAD / plate",
        price: "$ 23",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "FRESH FRUIT SALAD / plate",
        price: "$ 22",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
];



const content2 = [
    { 
        name: "Roasted Chicken Salad / plate",
        price: "$ 23",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "Salad Tikka / plate",
        price: "$ 18",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "Non Veg Russian Salad / plate",
        price: "$ 20",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "Sterline Salad / plate",
        price: "$ 25",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "Chicken Salad / plate",
        price: "$ 25",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "Salads / plate",
        price: "$ 26",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "Turkey Salad / plate",
        price: "$ 17",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "Prawn Or Chicken Pasta Salad / plate",
        price: "$ 22",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "Salad With Chicken / plate",
        price: "$ 20",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    { 
        name: "Chickpea Salad / plate",
        price: "$ 23",
        description:
        "5 Vegetables, Pan-grilled & served with Vinaigrette",
    },
    
];

const SaladFries = () => {

    const history = useHistory()
    const handleRoute = () =>{
        history.push('../burger-bhai')
    }

    const HandleRoute = () =>{
        history.goBack()
    }


    return (
        <>
            <div className="saladFries-section">
                <div className="dropMenu-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i class="fas fa-chevron-right"></i>
                    <h1  onClick={HandleRoute}>Menu</h1>
                    <i class="fas fa-chevron-right"></i>
                    <p>Salad & Fries</p>
                </div>


                <div className="saladFries-background">
                    <h1>Salad & Fries</h1>
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

export default SaladFries
