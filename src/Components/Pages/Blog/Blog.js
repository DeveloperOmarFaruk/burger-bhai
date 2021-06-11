import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useHistory, Link} from 'react-router-dom'
import './Blog.css'
import Blog1 from '../../../Images/blog-1.jpg'
import Blog2 from '../../../Images/blog-2.jpg'
import Blog3 from '../../../Images/blog-5.jpg'
import Gallery7 from '../../../Images/gallery-7.jpg'
import Gallery8 from '../../../Images/gallery-8.jpg'


const content = [
    {
        pic: Blog1,
        title: '15 Homemade Fast Food and Takeout Favorites',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },

    {
        pic: Blog2,
        title: 'Traditional or Not, There’s Technique at the Heart of Teriyaki Burgers',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },

    {
        pic: Blog3,
        title: 'Sometimes Sweeter Is Better: Mini Hawaiian-Style Salmon Burgers',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },
    {
        pic: Gallery7,
        title: '15 Homemade Fast Food and Takeout Favorites',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },

    {
        pic: Gallery8,
        title: 'Traditional or Not, There’s Technique at the Heart of Teriyaki Burgers',
        description: 'Where Burger Palace restaurant, 44 Canal Center Plaza #200, Alexandria, VA 22314, USA 555.329.0632 When 8th, February, 2016 19:00 What For the last three years we’ve been introducing a new special lineup of 7 additional burgers! Of course, that happens...',
        btn: 'Read More',
    },
]

const Blog = () => {

    const history = useHistory()

    const handleRoute = () =>{
        history.push('./burger-bhai')
    }


    const handleRoutePage2 = () =>{
        history.push('./blog/:pageNumber')
    }


    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])



    return (
        <>
            <div className="blog-section">
                <div className="blog-container">
                    <h1  onClick={handleRoute}>Home</h1>
                    <i class="fas fa-chevron-right"></i>
                    <p>Blog</p>
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
                    <span>1</span>
                    <Link to='/blog/2' className='a' onClick={handleRoutePage2}>2</Link>
                    <Link to='/blog/3' className='a' onClick={handleRoutePage2}>3</Link>
                    <Link to='/blog/4' className='a' onClick={handleRoutePage2}>4</Link>
                    <Link  to='/blog/2' className='a' onClick={handleRoutePage2}>Next<i class="fas fa-chevron-right"></i></Link>
                </div>
            
            </div>
        </>
    )
}

export default Blog












