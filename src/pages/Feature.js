import React, { useState } from 'react'
import ImageTap1 from '../images/illustration-features-tab-1.svg'
import ImageTap2 from '../images/illustration-features-tab-2.svg'
import ImageTap3 from '../images/illustration-features-tab-3.svg'

export default function Feature() {

    const [activeTap, setActiveTap] = useState('first')


    function showActive(tap) {
        setActiveTap(tap)
    }
    return (
        <section>
            <div className="main-background second-one"></div>
            <div className="feature-text">
                <h1 className='feature-text-title title'>Features</h1>
                <p className='feature-text-pragraph pragraph'>Our aim is to make it quick and easy for you to access your favourite websutes. your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <div className="feature-taps-container">
                <div className="taps">
                    <a onClick={() => showActive("first")} href='#'>Simple Bookmarking</a>
                    <a onClick={() => showActive("second")} href='#'>Speedy Searching</a>
                    <a onClick={() => showActive("third")} href='#'>Easy Sharing</a>
                </div>

                {/* First tap */}
                <div className={activeTap === "first" ? 'feature-tap active' : 'feature-tap '}>
                    <div className="feature-tap-image">
                        <img src={ImageTap1} alt="" />
                    </div>
                    <div className="feature-tap-text">
                        <h1>Bookmark in on click</h1>
                        <p className='feature-tap-text-pragraph'>Organize your bookmarks however your like. Our simple frag-and-drop interface gives you complate control over how you manage your favourite sites.</p>
                        <button>More info</button>
                    </div>
                </div>
                {/* Second tap */}
                <div className={activeTap === "second" ? 'feature-tap active' : 'feature-tap '}>
                    <div className="feature-tap-image">
                        <img src={ImageTap2} alt="" />
                    </div>
                    <div className="feature-tap-text">
                        <h1>Intellignet search</h1>
                        <p className='feature-tap-text-pragraph'>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        <button>More info</button>
                    </div>
                </div>
                {/* Third tap */}
                <div className={activeTap === "third" ? 'feature-tap active' : 'feature-tap '}>
                    <div className="feature-tap-image">
                        <img src={ImageTap3} alt="" />
                    </div>
                    <div className="feature-tap-text">
                        <h1>Share your bookmarks</h1>
                        <p className='feature-tap-text-pragraph'>Easily share your bookmarks and collecations with others. Create a shareable link that you can send at the click of a button.</p>
                        <button>More info</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
