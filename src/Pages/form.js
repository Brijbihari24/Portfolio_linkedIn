import React from 'react'

export default function Form() {
    return (
        <div>
            <p className="font-s-35 font-f-Inter font-w-400 m-l-30">Say Hello</p>
            <div className="hoz-line"></div>

            <div className="flex-space-around m-t-60">
                <div className="font-w-400 font-f-Inter font-s-27 w-500">
                    <p>Looking to start a new project or just want to say hi? Send me an email and I’ll do my best to reply within 24 hrs!</p>
                    <p>If contact forms aren’t your thing... send me an email at <a href="#">hello@arnau.design</a></p>
                </div>

                <div className="font-w-400 font-f-Inter font-18 w-500 ">
                    <div>
                        <div>
                            <div><p>Name*</p></div>
                            <div className="flex-space-around">
                                <div>
                                    <input className="form-input" type="text" placeholder="First Name"></input>
                                </div>
                                <div>
                                    <input className="form-input" type="text" placeholder="Last Name"></input>
                                </div>
                            </div>
                        </div>

                        <div className="flex-space-around">
                            <div>
                                <div>
                                    <div><p>Enquiry*</p></div>
                                </div>
                                <div>
                                    <input className="form-input" type="text" placeholder="Collab/Client"></input>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div><p>Email*</p></div>
                                </div>
                                <div>
                                    <input className="form-input" type="text" placeholder="hello@arnau.design"></input>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div><p>Message*</p></div>
                            </div>
                            <div>
                                <input className="form-input-ms" type="text" placeholder="hello..."></input>
                            </div>

                            <button className="form-ms-btn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
