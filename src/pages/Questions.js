import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

export default function Questions() {


    const [ShowAnswer, setShowAnswer] = useState('');



    function show(questionNumber) {
        setShowAnswer(questionNumber)
    }
    return (
        <section>
            <div className="question-text">
                <h1 className='question-title title'>Frequntly Asked Questions</h1>
                <p className='question-pragraph pragraph'> Here are some of our FAQs. if you have any other questions you'd like answerd please fell free to email us.</p>
            </div>

            <div className="question-container">

                <div className="questions">
                    <div className="question" onClick={() => show('one')}>
                        <h1>what is Bookmark?</h1>
                        <i className={ShowAnswer == "one" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                    </div>
                    <div className={ShowAnswer === "one" ? "answer pragraph active" : "answer pragraph"}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio perferendis consequatur temporibus iusto inventore fugiat porro illum dolore reprehenderit obcaecati aliquam officiis similique, illo voluptatem non exercitationem culpa nobis delectus.</p>
                    </div>
                </div>

                <div className="questions">
                    <div className="question" onClick={() => show('two')}>
                        <h1>How can I request a new browser?</h1>
                        <i className={ShowAnswer == "two" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                    </div>
                    <div className={ShowAnswer === "two" ? "answer pragraph active" : "answer pragraph"}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio perferendis consequatur temporibus iusto inventore fugiat porro illum dolore reprehenderit obcaecati aliquam officiis similique, illo voluptatem non exercitationem culpa nobis delectus.</p>
                    </div>
                </div>

                <div className="questions">
                    <div className="question" onClick={() => show('three')}>
                        <h1>Is there a mobile app?</h1>
                        <i className={ShowAnswer == "three" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                    </div>
                    <div className={ShowAnswer === "three" ? "answer pragraph active" : "answer pragraph"}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio perferendis consequatur temporibus iusto inventore fugiat porro illum dolore reprehenderit obcaecati aliquam officiis similique, illo voluptatem non exercitationem culpa nobis delectus.</p>
                    </div>
                </div>

                <div className="questions">
                    <div className="question" onClick={() => show('four')}>
                        <h1>what about other Chromium browsers?</h1>
                        <i className={ShowAnswer == "four" ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                    </div>
                    <div className={ShowAnswer === "four" ? "answer pragraph active" : "answer pragraph"}>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio perferendis consequatur temporibus iusto inventore fugiat porro illum dolore reprehenderit obcaecati aliquam officiis similique, illo voluptatem non exercitationem culpa nobis delectus.</p>
                    </div>
                </div>

                <button>More info</button>
            </div>
        </section>
    )
}
