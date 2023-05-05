import { Container, Row, Col, Card, ListGroup, ListGroupItem, CardHeader } from "reactstrap";
import { FaPaw } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { GetRandomCat } from "../components/api";
import { useState, useEffect } from "react";

export default function Home() {
    const [imageLoading, setImageLoading] = useState(true);
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

    if (imageLoading) {
        return (
            <Container className="my-5 pb-5">
                <h1 className="text-center mb-5 pb-5">Loading...</h1>
                <Container className="text-center mb-3">
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
                </Container>
                <Container className="text-end">
                    <img src="https://thumbs.gfycat.com/AnotherSimilarHoiho-max-1mb.gif" />
                </Container>
            </Container>);
    } else if (imageError) {
        return (
            <Container className="my-5 pb-5">
                <h1 className="text-center mb-5 pb-5">An error has occurred. Please try again later.</h1>
                <Container className="text-center mb-5 pb-5">
                    <img src="https://cliply.co/wp-content/uploads/2021/09/142109670_SAD_CAT_400.gif" />
                </Container>
            </Container>
        );
    } else {
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
                    <h5 id="frontpage">This is a cat-alogue of cat species, fun facts, purrfect puns and more. You can search for a
                        favourite fur-friend directly, or browse through our cats to find one. We have information on
                        a total of 67 breeds.</h5>
                    <Row className="mt-3">
                        <Col id="randomcat">
                            {imageLoading === false || imageError === null ?
                                <img src={randomCat} alt="a cat in the background with text in front that reads 'hello and welcome'" /> :
                                <p>askjd</p>
                            }
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end">
                            <h2>I want to...</h2>
                        </Col>
                        <Col className=" d-flex align-items-center justify-content-start">
                            <Card className="homeCard"
                            >
                                <ListGroup flush>
                                    <ListGroupItem>
                                        <NavLink className="menu" to="/login">Login</NavLink>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <NavLink className="menu" to="/search">Search for a cat breed</NavLink>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <NavLink className="menu" to="/cats">Browse all of the cat breeds</NavLink>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}