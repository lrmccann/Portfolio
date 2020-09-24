import React from "react"

function ContactForm (props) {
    return ( 
        <form style={{marginTop:"7%" , marginBottom:"8.5%"}}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input type="text" className="form-control" 
                    id="exampleFormControlInput1" 
                    onChange={props.inputFunction} 
                    name="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Subject</label>
                <input type="text" className="form-control" 
                    id="exampleInputPassword1"
                    onChange={props.inputFunction} 
                    name="subject" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" 
                    rows="6"
                    onChange={props.inputFunction} 
                    name="message" >
                </textarea>
            </div>

   
            <div className="button-container">
                <a type="submit" className="btn btn-primary" href={`mailto:ishabali-sample@gmail.com?subject=Message from ${props.name}: ${props.subject}&body=${props.message}`}>Shoot an email</a>
            </div> 
        </form>
        )
    }
export default ContactForm