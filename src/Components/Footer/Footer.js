import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
            <div className="footer-address">
                <div className="developer">
                    <p>
                    <a href="#" >Developer.OmarFaruk ©</a>
                    . All Rights Reserved.
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

export default Footer
