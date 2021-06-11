import React,{useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import FsLightbox from 'fslightbox-react';
import {useHistory} from 'react-router-dom'
import './Gallery.css'
import GalleryVideo from '../../../Images/gallery-video.mp4'


const images1 = [
    { 
        pic:'https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    { 
        pic:'https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    { 
        pic:'https://images.unsplash.com/photo-1585730315692-5252e57d4b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
    },
]



const images2 = [
    { 
        pic:'https://images.unsplash.com/photo-1615392263612-386540ba6a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    { 
        pic:'https://images.unsplash.com/photo-1563979026-05df925d8354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=80',
    },
    { 
        pic:'https://images.unsplash.com/photo-1555992457-b8fefdd09069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    },
]



const images3 = [
    { 
        pic:'https://images.unsplash.com/photo-1579236546973-39f510ef2a37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    },
    { 
        pic:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    { 
        pic:'https://images.unsplash.com/photo-1541557435984-1c79685a082b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
]


const images4 = [
    { 
        pic:'https://images.unsplash.com/photo-1579236546973-39f510ef2a37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    },
    { 
        pic:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    },
    { 
        pic:'https://images.unsplash.com/photo-1541557435984-1c79685a082b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
]

const Gallery = () => {

    const history = useHistory()

    const handleRoute = () =>{
        history.push('./burger-bhai')
    }

    const [toggler, setToggler] = useState(false)


    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])


    return (
        <>
            <div className="about-section">
                <div className="about-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i class="fas fa-chevron-right"></i>
                    <p>Gallery</p>
                </div>

                <div className="gallery-header">
                <video className="gallery-video" width='400' height='300' src={GalleryVideo} autoplay='auto' muted='auto' loop='auto' preload='auto'></video>
                <h1>Traditionally American...</h1>
                </div>

                <div className="gallery-text" data-aos="zoom-in-down">
                    <h1>Restaurant's interior</h1>
                    <p>We value our authentic very much. This three dining halls that we have highlight how much we treasure tha traditional spirit of the America's Southern setting...</p>
                </div>


                <div className="gallery-image">
                {images1.map((item, index) => (
                    <div className="gallery-row" key={index}>
                    <img className='gallery-row-img' src={item.pic} alt={item.pic} 
                    onClick={() => setToggler(!toggler)}/>
                    <div className="search">
                    <i class="fas fa-search-plus"
                    onClick={() => setToggler(!toggler)}></i>
                    </div>
                </div>
                ))}


                {images2.map((item, index) => (
                    <div className="gallery-row" key={index}>
                    <img className='gallery-row-img' src={[item.pic]} alt={item.pic} 
                    onClick={() => setToggler(!toggler)}/>
                    <div className="search">
                    <i class="fas fa-search-plus"
                    onClick={() => setToggler(!toggler)}></i>
                    </div>
                </div>
                ))}



                {images3.map((item, index) => (
                    <div className="gallery-row" key={index}>
                    <img className='gallery-row-img' src={[item.pic]} alt={item.pic} 
                    onClick={() => setToggler(!toggler)}/>
                    <div className="search">
                    <i class="fas fa-search-plus"
                    onClick={() => setToggler(!toggler)}></i>
                    </div>
                </div>
                ))}


                {images4.map((item, index) => (
                    <div className="gallery-row" key={index}>
                    <img className='gallery-row-img' src={[item.pic]} alt={item.pic} 
                    onClick={() => setToggler(!toggler)}/>
                    <div className="search">
                    <i class="fas fa-search-plus"
                    onClick={() => setToggler(!toggler)}></i>
                    </div>
                </div>
                ))}
                </div>


                <FsLightbox
                toggler={toggler}
                sources={[
                    'https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                    'https://images.unsplash.com/photo-1529973565457-a60a2ccf750d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                    'https://images.unsplash.com/photo-1585730315692-5252e57d4b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
                    'https://images.unsplash.com/photo-1579236546973-39f510ef2a37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
                    'https://images.unsplash.com/photo-1615392263612-386540ba6a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                    'https://images.unsplash.com/photo-1563979026-05df925d8354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=80',
                    'https://images.unsplash.com/photo-1555992457-b8fefdd09069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
                    'https://images.unsplash.com/photo-1541557435984-1c79685a082b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
                    'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                        ]}
                />
            </div>
        </>
    )
}

export default Gallery




