import React, { useState } from 'react' 
import emailjs from 'emailjs-com'

// import './ContactUs.css'

const Result = () => {
    return (
        <p>Your message has been successfully sent! We will contact you as soon as possible.</p>
    ) 
}

export default function ContactUs() {

    const [result, showResult] = useState(false)
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_tmrrmg3', 'template_vxv1034', e.target, 'user_9MXq73rfVJ5rPKqrhojHx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      e.target.reset()
      showResult(true)
  }

  return (
    <form className="contactForm" onSubmit={sendEmail}>

      <label>Name</label>
      <input type="text" name="name" />
      <label>Mobile Number</label>
      <input type="text" name="mobile_number" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit">Send</button>

      <div className="row">{result ? <Result /> : null}</div>
    </form>
  )
}

