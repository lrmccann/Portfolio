import React, { useState } from "react";
import '../styleSheets/contact.css';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_DXovDRZFuUdffdqwbkHJo");

export default function Contact() {

    const [messageName, setName] = useState("");
    const [messageSubject, setSubject] = useState("");
    const [messageBody, setBody] = useState("");


    const handleInputChange = event => {
        event.preventDefault();
        var name = messageName;
        var subject = messageSubject;
        var body = messageBody;
    };

    const submitForm = async event => {
        event.preventDefault();

        var emailForm = ({
            'emailSenderEmail': messageName,
            'emailSubject': messageSubject,
            'emailMessage': messageBody
        });
        emailjs.send('service_jcbz5lg', 'template_geclrfm', emailForm)
            .then(alert("Success, I have recieved your email and I'll be in touch!"))
            .catch((error) => {
                alert("Oh no..; something happened, refresh and try again!")
                console.log('failed...', error)
            })
    }

    return (
        <div className="container-fixed contactCont">
            <h1 id="contact-header">Contact</h1>
            <div className="contactDiv">
                <h2 className="welcomeMessage">Let's Connect!</h2>
                <form className="formStyle" onInput={handleInputChange}>
                    <div className="form-group">
                        <label id="formHeaderText">Email</label>
                        <input type="text" className="form-control" defaultValue="" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label id="formHeaderText">Topic</label>
                        <input type="text" className="form-control" defaultValue="" onChange={e => setSubject(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label id="formHeaderText">Message</label>
                        <textarea className="form-control" rows="6" defaultValue="" onChange={e => setBody(e.target.value)} >
                        </textarea>
                    </div>
                    <div className="button-container">
                        <button onClick={submitForm} type='submit' value='submit' className="submit-btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}