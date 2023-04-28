import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, Col, Row } from "reactstrap";

export default function Login() {
    const [email, setEmail] = useState("");
    const usernameArray = email.split("@");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    return (
        <div className="container mt-5">
            <div className="container d-flex justify-content-center">
                <h1> Welcome {usernameArray[0]}!</h1>
            </div>
            <div className="container mt-3 w-50 justify-content-center">
                <Form onSubmit={(event) => {
                    event.preventDefault();
                    alert("You have submitted a login request :)");
                }}>
                    <FormGroup floating>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Email"
                            type="email"
                            //invalid={'has-danger'}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <Label for="exampleEmail">
                            Email
                        </Label>
                    </FormGroup>
                    {' '}
                    <FormGroup floating>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        <Label for="examplePassword">
                            Password
                        </Label>
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Col className="d-flex justify-content-center">
                            <Button>
                                Submit
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}