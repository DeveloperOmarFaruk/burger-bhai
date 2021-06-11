import React from 'react'
import './AddressNavbar.css'


const AddressNavbar = () => {
    return (
        <>
            <div className="container">
            <div className="nav-address">
                <div className="address">
                    <p>
                    <i className="fas fa-map-marker-alt"></i>
                    6087 Richmond hwy, Alexandria, VA
                    </p>

                    <p>
                    <i className="fas fa-phone-alt"></i>
                    <span className='mobile-number'>703 329 0632</span>
                    </p>

                    <p>
                    <i className="far fa-clock"></i>
                    Mo-Fr 11:00-00:00, Sa-Su 15:00-00:00
                    </p>
                    
                </div>

                <div className="social-icon">
                <a href="">
                <i class="fab fa-facebook"></i>
                </a>    

                <a href="">
                <i class="fab fa-twitter"></i>
                </a>

                <a href="">
                <i class="fab fa-youtube"></i>
                </a>

                <a href="">
                <i class="fab fa-instagram"></i>
                </a>

                </div>
            </div>
            </div>
        </>
    )
}

export default AddressNavbar
