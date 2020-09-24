import React, {Component} from "react";
import ContactForm from "../components/ContactForm"
import {Container , Row} from "../components/Grid";
// import Row from "../components/Row";
import Col from "../components/Col";

class Contact extends Component {
    state = {
      name: "",
      subject: "",
      message: ""
    };

    handleInputChange = event => {
        event.preventDefault();
        console.log(event);
        const value = event.target.value;
        const name = event.target.name;
        console.log("**********");
        console.log(value);
        console.log(name);
        this.setState({
          [name]: value
        });
    };

    render () {
        return (
            <Container >
                <Row>
                    <Col size="md-12">
                        <ContactForm
                            inputFunction = {this.handleInputChange}
                            subject = {this.state.subject}
                            message = {this.state.message}
                            name = {this.state.name}
                        />
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Contact