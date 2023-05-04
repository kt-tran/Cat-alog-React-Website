import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, Col, FormFeedback, Alert, Container } from "reactstrap";

export function Submit(credentials) {
    //This is login code from CAB230 

    // const url = `http://sefdb02.qut.edu.au:3001/user/login`;

    // return fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "accept": "application/json", 
    //     "Content-Type": "application/json"},
    //   body: JSON.stringify(credentials)
    // })
    // .then(res => res.json());
    if (credentials.email !== "" && credentials.password !== "")
        return "Success";
}

const SuccessAlert = () => (
    <Alert>
        <h4 className="alert-heading">You successfully logged in.</h4>
        <Button
            color="success"
            href="/"
            tag="a"
        >
            Proceed
        </Button>
    </Alert>
)

const FailAlert = () => (
    <Alert color="danger">
        <h4 className="alert-heading">Login failed!</h4>
        <p>The email or password you provided was incorrect, please try again.</p>
    </Alert>
)

function checkSuccess(result) {
    if (result === true) {
        return <SuccessAlert />;
    } else if (result === false) {
        return <FailAlert />
    } else {
        return null;
    }
}


export default function Login() {
    const [email, setEmail] = useState("");
    const usernameArray = email.split("@");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await Submit({
            email,
            password
        });
        if (token !== "Success") {
            setLoginSuccess(false);
            console.log("fail");
        } else {
            localStorage.setItem("token", token);
            console.log("success");
            setLoginSuccess(true);
        }
    }

    return (
        <Container className="mt-5">
            <Container className="d-flex justify-content-center">
                <h1> Welcome{email !== "" ? " " + usernameArray[0] : null}!</h1>
            </Container>
            {checkSuccess(loginSuccess)}
            <Container className="mt-3 w-50 justify-content-center">
                <Form
                    onSubmit={handleSubmit}>
                    <FormGroup floating>
                        <Input
                            id="email"
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
                    <FormGroup floating>
                        <Input
                            invalid={email !== "" && password === ""}
                            valid={password !== ""}
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                        />
                        {password === "" ? <FormFeedback>Please enter your password</FormFeedback> : null}
                        <Label for="password">
                            Password
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Col className="d-flex justify-content-center">
                            <Button>
                                Submit
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        </Container>
    );
}