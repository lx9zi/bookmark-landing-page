import React from 'react'
import Navbar from '../component/Navbar'
import MainImage from '../images/illustration-hero.svg'

export default function Main() {
    return (
        <div>
            <Navbar />
            <section className="main-page-container">
                <div className="main-background"></div>

                <div className="text">
                    <h1 className='main-title'>A simple Bookmark Manager</h1>
                    <p className='main-pragraph'>A clean and simple interface to organize your favourite website. Open a new browser tap and see your sites load instantly. Try it for free.</p>
                    <button className='main-button'>Get it on Chrome</button>
                    <button className='main-button'>Get it on Firefox</button>
                </div>
                <div className="image">
                    <img src={MainImage} alt="" />
                </div>
            </section>
        </div>
    )
}
