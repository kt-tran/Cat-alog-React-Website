import { NavLink } from 'react-router-dom';
import { Container, Col } from "reactstrap";
import InfoIcon from '@mui/icons-material/Info';
import { FaPaw } from "react-icons/fa";
import { HandleGetFact, GetRandomCatFact } from './api';
import { useEffect } from "react";


export default function Footer() {
    const { loading, response, error } = HandleGetFact();
    return (
        <div>
            <footer className="d-flex justify-content-between align-items-center py-2 border-top">
                <Col className="col-md-3 align-self-center">
                    <Container className="mt-3 mx-3">
                        <h2>Purrfect Paws <FaPaw className="navPaw" /></h2>
                        <p>Find your fur-ever friend today!</p>
                    </Container>
                </Col>
                <Col className="col-md-7 flex-grow-1 active">
                    <Container>
                        <p>Fun Fact: {response.fact}</p>
                    </Container>
                </Col>
                <Col className="col-md-2 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><NavLink className="text-muted" to="/itemtest"><InfoIcon /></NavLink></li>
                    <li className="ms-3"><NavLink className="text-muted" to="/contactUs"><InfoIcon /></NavLink></li>
                    <li className="ms-3"><NavLink className="text-muted" to="/aboutUs"><InfoIcon /></NavLink></li>
                </Col>
            </footer>
        </div>
    );
}