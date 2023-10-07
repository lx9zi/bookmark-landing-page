import React from 'react'
import LogoSvg from '../images/logo-bookmark.svg'
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'

export default function Footerna() {
    return (
        <div className="footer-navbar navbar">
            <div className="footer-logo logo">
                <img src={LogoSvg} alt="logo-svg" />
            </div>
            <ul className="footer-navbar items">
                <li><a href="#">features</a></li>
                <li><a href="#">pricing</a></li>
                <li><a href="#">contact</a></li>
            </ul>
            <div className="social-media-icons">
                <img src={Facebook} alt="logo-svg" />
                <img src={Twitter} alt="logo-svg" />
            </div>
        </div>
    )
}
