import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import Logo from '../../Images/logo-1.png'
import AddressNavbar from './AddressNavbar'
import './Navbar.css'
import MenuDropdown from '../Dropdown/MenuDropdown'
import DotDropdown from '../Dropdown/DotDropdown'
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Menu from "../Pages/Menu/Menu";
import SoftDrinks from "../Pages/Menu/DropMenu/SoftDrinks";
import SaladFries from "../Pages/Menu/DropMenu/SaladFries";
import Breakfast from "../Pages/Menu/DropMenu/Breakfast";
import Burgers from "../Pages/Menu/DropMenu/Burgers";
import Gallery from "../Pages/Gallery/Gallery";
import Reservation from "../Pages/Reservation/Reservation";
import Blog from "../Pages/Blog/Blog";
import Page2 from "../Pages/Blog/BlogPage2";
import Contact from "../Pages/Contact/Contact";


const style = {
    borderBottom: '2px solid var(--Orange)',
    color: 'var(--Orange)',
}


const Navbar = () => {

    const [dropdown, setDropdown] = useState(false)

    const [dotDropdown, setDotDropdown] = useState(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 0) {
        setDropdown(false)
        }
        else{
        setDropdown(true)
        }
    }
    
    
    const onMouseLeave = () =>{
        if (window.innerWidth < 0){
        setDropdown(false)
        }
        else{
        setDropdown(false)
        }
    }


    const onMouseE = () => {
        if (window.innerWidth < 0) {
            setDotDropdown(false)
        }
        else{
            setDotDropdown(true)
        }
    }

    const onMouseL = () =>{
        if (window.innerWidth < 0){
            setDotDropdown(false)
        }
        else{
            setDotDropdown(false)
        }
    }
    
    return (
        <>
        <Router>
            <AddressNavbar/>
            <nav className="navbar">
    <div className="nav-container">

        <NavLink to='/burger-bhai'  className="logo">
        <img className='logo-img' src={Logo} />
        <h1>Burger Bhai</h1>
        </NavLink>



        <ul>

        <li className="nav-item">
            <NavLink to='/burger-bhai' className='home'>
            Home
            </NavLink>
        </li>


        <li className="nav-item">
            <NavLink to='/about' className='nav-links' activeStyle={style}>
            About
            </NavLink>
        </li>


        <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLink to='/menu' className='nav-links' activeStyle={style}>
            Menu
            </NavLink>
            {dropdown && <MenuDropdown/>}
        </li>

        <li className="nav-item" >
            <NavLink to='/gallery' className='nav-links' activeStyle={style}>
            Gallery
            </NavLink>
        </li>

        <li className="nav-item reservation" >
            <NavLink to='/reservation' className='nav-links' activeStyle={style}>
            Reservation
            </NavLink>
        
        </li>

        <li className="nav-item blog">
            <NavLink to='/blog' className='nav-links' activeStyle={style}>
            Blog
            </NavLink>
        </li>


        <li className="nav-item contact">
            <NavLink to='/contact' className='nav-links' activeStyle={style}>
            Contact Us
            </NavLink>
        </li>


        
        <li className="nav-item dot" onMouseEnter={onMouseE} onMouseLeave={onMouseL}>
            <NavLink to='/burger-bhai' className='nav-links'>
            <i className="fas fa-ellipsis-h "></i>
            </NavLink>
            {dotDropdown && <DotDropdown/>}
        </li>
        
        
        </ul>
    </div>
    </nav>


    
    <Switch>
        <Route path="/burger-bhai" exact component={Home}/>
        <Route path="/about"  exact  component={About}/>
        <Route path="/menu" exact  component={Menu}/>
        <Route path="/menu/softDrinks"  exact  component={SoftDrinks}/>
        <Route path="/menu/saladFries"  exact  component={SaladFries}/>
        <Route path="/menu/breakfast"  exact component={Breakfast}/>
        <Route path="/menu/burgers"  exact component={Burgers}/>
        <Route path="/gallery"  exact component={Gallery}/>
        <Route path="/reservation"  exact component={Reservation}/>
        <Route path="/blog" exact component={Blog}/>
        <Route path="/blog/:pageNumber"  exact  component={Page2}/>
        <Route path="/contact"  exact component={Contact}/>
        </Switch>
    </Router>

        </>
    )
}

export default Navbar

