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
        console.log(name, subject, body);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form className="formStyle" onClick={handleInputChange}>
                        <div className="form-group">
                            <label style={{ color: "white" }}>Name</label>
                            <input type="text" className="form-control" defaultValue="" onInput={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label style={{ color: "white" }}>Subject</label>
                            <input type="text" className="form-control" defaultValue="" onChange={e => setSubject(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label style={{ color: "white" }}>Message</label>
                            <textarea className="form-control" rows="6" defaultValue="" onChange={e => setBody(e.target.value)} >
                            </textarea>
                        </div>


                        <div className="button-container">
                            {/* <a type="submit" className="btn btn-primary" href={`mailto:loganrmccann@gmail.com?subject=Message from ${props.name}: ${props.subject}&body=${props.message}`}>Send</a> */}
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}