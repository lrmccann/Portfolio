import React, { useState } from "react";
import '../styleSheets/contact.css';

export default function Contact() {

    const [messageName, setName] = useState("");
    const [messageSubject, setSubject] = useState("");
    const [messageBody, setBody] = useState("");


    const handleInputChange = event => {
        event.preventDefault();
        var name = messageName;
        var subject = messageSubject;
        var body = messageBody;

        








        console.log('name :' , name)
        console.log('subject : ' , subject)
        console.log('body : ', body)
    };

    const submitForm = () => {

    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="welcomeMessage">Lets Connect</h1>
                <div className="col-md-12">
                    <form className="formStyle" onInput={handleInputChange}>
                        <div className="form-group">
                            <label id="formHeaderText">Name</label>
                            <input type="text" className="form-control" defaultValue="" onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label id="formHeaderText">Subject</label>
                            <input type="text" className="form-control" defaultValue="" onChange={e => setSubject(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label id="formHeaderText">Message</label>
                            <textarea className="form-control" rows="6" defaultValue="" onChange={e => setBody(e.target.value)} >
                            </textarea>
                        </div>


                        <div className="button-container">
                            {/* <a type="submit" className="btn btn-primary" href={`mailto:loganrmccann@gmail.com?subject=Message from ${props.name}: ${props.subject}&body=${props.message}`}>Send</a> */}
                            <button onClick={submitForm} className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}