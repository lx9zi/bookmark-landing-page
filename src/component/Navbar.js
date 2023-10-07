import React, { useState } from 'react'
import LogoSvg from '../images/logo-bookmark.svg'

export default function Navbar() {


    const [openNav, seOpenNav] = useState(false);


    function openNavigation() {
        seOpenNav(!openNav)
    }
    return (
        <div className="navbar">
            <div className="logo">
                <img src={LogoSvg} alt="logo-svg" />
            </div>
            <ul className={openNav === true ? "items active" : "items"}>
                <li><a href="#">features</a></li>
                <li><a href="#">pricing</a></li>
                <li><a href="#">contact</a></li>
                <button>Login</button>
            </ul>
            <i className={openNav === false ? "ri-menu-line menu" : "ri-close-fill menu"} onClick={openNavigation}></i>
            {/* <i className={openNav === false ? "ri-close-fill menu" : "ri-eye-close-line menu"} onClick={openNavigation}></i> */}
        </div>
    )
}
