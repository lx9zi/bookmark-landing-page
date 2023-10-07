import React from 'react'
import ImageCard1 from '../images/logo-chrome.svg'
import ImageCard2 from '../images/logo-firefox.svg'
import ImageCard3 from '../images/logo-opera.svg'
import Dots from '../images/bg-dots.svg'

export default function Extention() {
    return (
        <section>
            <div className="extention-header">
                <h1 className='extention-title title'>Download the extension</h1>
                <p className='extention-pragraph pragraph'>We've got more browsers in the pipeline. Please do let know if you've git favourite you'd like us to prioritize.</p>
            </div>

            <div className="extension-card-container">
                {/* First card */}
                <div className="extention-card">
                    <img className='extention-card-main-image' src={ImageCard1} alt="chrome" />
                    <h1>Add to Chrome</h1>
                    <span>Minimum version 62</span>
                    <img src={Dots} alt="dots" />
                    <button>Add & Install Extension</button>
                </div>
                {/* Second card */}
                <div className="extention-card">
                    <img className='extention-card-main-image' src={ImageCard2} alt="chrome" />
                    <h1>Add to Firefox</h1>
                    <span>Minimum version 55</span>
                    <img src={Dots} alt="dots" />
                    <button>Add & Install Extension</button>
                </div>
                {/* Third card */}
                <div className="extention-card">
                    <img className='extention-card-main-image' src={ImageCard3} alt="chrome" />
                    <h1>Add to Opera</h1>
                    <span>Minimum version 46</span>
                    <img src={Dots} alt="dots" />
                    <button>Add & Install Extension</button>
                </div>
            </div>
        </section>
    )
}
