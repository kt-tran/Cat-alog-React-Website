import { Container, Row, Col } from "reactstrap";
import { FaPaw } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { GetRandomCat } from "../components/api";
import { useState, useEffect } from "react";

export default function Home() {
    const [imageloading, setImageLoading] = useState(true);
    const [randomCat, setRandomCat] = useState([]);
    const [imageError, setImageError] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                setRandomCat(await GetRandomCat());
                setImageLoading(false);
            } catch (imageError) {
                setImageError(imageError);
                setImageLoading(false);
            }
        })();
    }, []);

    return (
        <div>
            <div className="text-center bg-image hero-image">
                <div className="d-flex justify-content-end align-items-center hero-text h-100 p-5">
                    <div className="text-white">
                        <Container className="mb-3">
                            <h1>Purrfect Paws <FaPaw className="navPaw" /></h1>
                        </Container>
                        <Container>
                            <NavLink className="btn btn-outline-light btn-lg" to="/cats" role="button">Browse cats</NavLink>
                        </Container>
                    </div>
                </div>
            </div>

            <Container className="mt-5">
                <h1> Welcome to the Purrfect Paws cat collection! </h1>
            </Container>

            <Container className="mt-3">
                <i className="bi bi-globe-asia-australia"></i>
                <h5 id="frontpage">This is a cat-alogue of cat species, fun facts, purrfect puns and more. You can search for a favourite fur-friend directly, or browse through our cats to find one.</h5>
                <Row className="mt-3">
                    <Col id="randomcat">
                        <img src={randomCat} alt="a cat with text that reads 'hello and welcome'" />
                    </Col>
                    This website was made with ReactJS
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}