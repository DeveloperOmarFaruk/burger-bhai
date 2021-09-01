import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useHistory} from 'react-router-dom'
import './Blog.css'
import Gallery1 from '../../../Images/gallery-1.jpg'
import Gallery2 from '../../../Images/gallery-2.jpg'
import Gallery3 from '../../../Images/gallery-3.jpg'
import Gallery4 from '../../../Images/gallery-4.jpg'
import Gallery5 from '../../../Images/gallery-5.jpg'
import Gallery6 from '../../../Images/gallery-6.jpg'




const content = [
    {
        pic: Gallery1,
        title: '15 Homemade Fast Food and Takeout Favorites',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },

    {
        pic: Gallery2,
        title: 'Traditional or Not, There’s Technique at the Heart of Teriyaki Burgers',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },

    {
        pic: Gallery3,
        title: 'Sometimes Sweeter Is Better: Mini Hawaiian-Style Salmon Burgers',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },
    {
        pic: Gallery4,
        title: '15 Homemade Fast Food and Takeout Favorites',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },

    {
        pic: Gallery5,
        title: 'Traditional or Not, There’s Technique at the Heart of Teriyaki Burgers',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },

    {
        pic: Gallery6,
        title: 'Sometimes Sweeter Is Better: Mini Hawaiian-Style Salmon Burgers',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },
    
]



const BlogPage2 = ({match}) => {

    const history = useHistory()

    const handleRoute = () =>{
        history.push('../burger-bhai')
    }


    const handleRouteBlog = () =>{
        history.push('./')
    }



    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    return (
        <>
            <div className="blog-section">
                <div className="blog-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i className="fas fa-chevron-right"></i>
                    <h1  onClick={handleRouteBlog}>Blog</h1>
                    <i className="fas fa-chevron-right"></i>
                    <p>Page{match.params.pageNumber}</p>
                </div>


                {content.map((item, index) => (
                    <div className="blog-img-text"  key={index}>
                    <img src={item.pic} alt={item.pic}/>
                    <div className="blog-text">
                        <h1 data-aos="zoom-in">{item.title}</h1>
                        <p data-aos="zoom-in-up">{item.description}</p>
                        <div className="blog-read-btn" data-aos="fade-down">
                        <a className='read-btn' href="#">{item.btn}</a>
                        </div>
                    </div>
                </div>
                ))}


                <div className="blog-page-number">
                    <a href="#" onClick={handleRouteBlog}><i class="fas fa-chevron-left"></i> Previous</a>
                    {/* <a href="#" onClick={handleRouteBlog}>1</a> */}
                    <span>{match.params.pageNumber}</span>
                </div>
            
            </div>
        </>
    )
}

export default BlogPage2
