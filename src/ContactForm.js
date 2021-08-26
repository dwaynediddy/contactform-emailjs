import React from 'react'
import { IoLocationOutline, IoCallOutline, IoMailOutline  } from "react-icons/io5"

const ContactForm = () => {
    return (
        <section>
            <div className="container">
                <div className="contactInfo">
                    <div>
                        <h3>contact info</h3>
                        <ul className="info">
                            <li>
                                <span><IoLocationOutline className="icon" /></span>
                                <span>69 Rockhampton straya</span>
                            </li>
                            <li>
                                <span><IoCallOutline className="icon" /></span>
                                <span>+123 456 789</span>
                            </li>
                            <li>
                                <span><IoMailOutline className="icon" /></span>
                                <span>getme91thieving@htfu.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contactForm">
                    <h3>Send a message</h3>
                    <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" name="message" placeholder="First Name" required />
                                <span>First Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" name="message" placeholder="Last Name"/>
                                <span>Last Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" name="message" placeholder="Email Address" />
                                <span>Email</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" name="message" placeholder="Phone Number"required />
                                <span>Phone Number</span>
                        </div>
                        <div className="inputBox w150">
                            <input type="text" name="message" placeholder="Tell us how we can help"required />
                            {/* // add submit function */}
                                <button>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm

