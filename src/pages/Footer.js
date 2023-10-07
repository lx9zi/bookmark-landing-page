import React, { useState } from 'react'
import FooterNav from '../component/FooterNav'

export default function Footer() {

    const [erorrTrack, setErorrTrack] = useState('')
    const [erorrInp, setErorrInp] = useState(false);



    function erorrTracking(text) {
        setErorrTrack(text)
    }


    function checkEror() {
        let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!erorrTrack.match(valid)) {
            setErorrInp(true)
        }
        else {
            setErorrInp(false)
        }
    }

    return (
        <section className='footer-section'>
            <div className="footer-text">
                <p className='footer-text pragraph'>35,000+ ALREADY JOINED</p>
                <h1 className='footer-text title'>Stay up-to-date with what we're doing</h1>
            </div>

            <div className="footer-text contact-us">
                <div className="check-input">
                    <div className={erorrInp ? "error-input active" : "error-input"}>
                        <input type="text" placeholder='Enter your email address' onChange={(text) => erorrTracking(text.target.value)} />
                    </div>
                </div>
                <button onClick={checkEror}>Contact us </button>
            </div>
            <FooterNav />
        </section>
    )
}
