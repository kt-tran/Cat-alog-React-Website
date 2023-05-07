import { NavLink } from 'react-router-dom';
import { Container, Col } from "reactstrap";
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import { FaPaw } from "react-icons/fa";
import { HandleGetFact } from './api';


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
                        {loading === true || error !== null ?
                            <p></p> :
                            <p>Fun Fact: {response.fact}</p>}
                    </Container>
                </Col>
                <Col className="pe-2 col-md-2 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><NavLink className="text-white" to="/contact"><HelpIcon /></NavLink></li>
                    <li className="ms-3"><NavLink className="text-white" to="/about"><InfoIcon /></NavLink></li>
                </Col>
            </footer>
        </div>
    );
}