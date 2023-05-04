import { useState } from "react";
import { Container, Form, Input, Row, Col, Label, FormGroup, Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function ContactUs() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    function handleSubmit(e) {
        if (firstName && lastName && email && feedback) {
            alert('You have submitted successfully!')
        } else {
            e.preventDefault();
            setSubmitted(true);
        }
    }

    return (
        <Container className="mt-3 ">

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    You submitted successfully!
                </ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Ok
                    </Button>
                </ModalFooter>
            </Modal>

            <Container className="d-flex justify-content-center">
                <h1>Contact Us</h1>
            </Container>

            <Container className="mt-3 w-50 justify-content-center">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <FormGroup floating>
                                <Input
                                    id="firstName"
                                    invalid={!firstName && submitted}
                                    name="first"
                                    placeholder="First Name"
                                    onChange={(event) => {
                                        setFirstName(event.target.value);
                                    }}
                                />
                                <Label for="firstName">
                                    First Name
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup floating>
                                <Input
                                    id="lastName"
                                    invalid={!lastName && submitted}
                                    name="last"
                                    placeholder="Last Name"
                                    onChange={(event) => {
                                        setLastName(event.target.value);
                                    }}
                                />
                                <Label for="lastName">
                                    Last Name
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup floating>
                        <Input
                            id="email"
                            invalid={!email && submitted}
                            name="Email"
                            placeholder="Email"
                            type="email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <Label for="email">
                            Email Address
                        </Label>
                    </FormGroup>

                    <FormGroup>
                        <Input
                            rows="5"
                            id="response"
                            invalid={!feedback && submitted}
                            name="Response"
                            placeholder="Type your feedback here..."
                            type="textarea"
                            onChange={(event) => {
                                setFeedback(event.target.value);
                            }}
                        />
                    </FormGroup>

                    <Button color="primary">
                        Submit
                    </Button>
                </Form>
                <hr></hr>
                <Container className="d-flex justify-content-center pb-2">
                    <h1>Alternatively</h1>
                </Container>

            </Container>
            <Row>
                <Col>
                    <p>Phone us @ 1800 123 456</p>
                    <ul>
                        <li>Monday: 9AM - 5PM</li>
                        <li>Tuesday: 9AM - 5PM</li>
                        <li>Wednesday: 9AM - 5PM</li>
                        <li>Thursday: 9AM - 5PM</li>
                        <li>Friday: 9AM - 5PM</li>
                    </ul>
                </Col>

                <Col className="d-flex justify-content-center pb-2">
                    <p>Mail us @ 123 Nowhere St, NotReal, 1234.</p>
                </Col>

                <Col className="d-flex justify-content-end pb-2">
                    <p>Email us directly @ example@email.com</p>
                </Col>
            </Row>
        </Container>
    )
}