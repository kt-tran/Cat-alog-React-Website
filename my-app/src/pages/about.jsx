import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "reactstrap";
import { GetRandomCatImage } from "../components/api";

export default function AboutUs() {
    const [imageloading, setImageLoading] = useState(true);
    const [randomCat, setRandomCat] = useState([]);
    const [imageError, setImageError] = useState(null);


    useEffect(() => {
        (async () => {
            try {
                setRandomCat(await GetRandomCatImage());
                setImageLoading(false);
            } catch (imageError) {
                setImageError(imageError);
                setImageLoading(false);
            }
        })();
    }, []);

    return (
        <Container className="mt-5">
            <h1 className="text-center">About Us</h1>
            <Row>
                <Col className="p-3">
                    <h5 className="p-3 mission text-right">Mission Statement</h5>
                    <p className="text-right">
                        Our mission is to provide a platform for cat enthusiasts to learn more about different breeds, their characteristics, and how to care for them.
                        We want to promote responsible pet ownership and help ensure that cats receive the love and care they deserve.
                        We take pride in the quality and accuracy of the information we provide. Our team of experts includes veterinarians, breeders,
                        and cat enthusiasts who work together to ensure that the information we share is up-to-date, reliable, and informative.
                    </p>

                </Col>

                <Col className="p-3">
                    <img className="aboutCatImage" src={randomCat} alt="A picture of a random cat" />
                </Col>
            </Row>

            <Row>
                <Col className="p-3">
                    <img className="aboutCatImage" src={randomCat} alt="A picture of a random cat" />
                </Col>

                <Col className="p-3">
                    <h5 className="p-3 mission">Why Cats?</h5>
                    <p>
                        We believe that cats are more than just pets; they are members of our families. We believe all cats are the best companions one can have (sorry dog owners).
                        That's why we're committed to creating a community where cat lovers
                        can connect, share their experiences, and learn from each other. We are grateful to all the cat owners, breeders, and experts who have contributed to
                        our website.
                    </p>
                    <p>
                        We are always looking for new ideas and feedback to improve our platform, so please don't hesitate to reach out to us with any suggestions or questions.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col className="p-3">
                    <h5 className="p-3 mission text-right">Our Team</h5>
                    <p className="text-right">
                        Our team of experts includes veterinarians, breeders, and cat enthusiasts who work together to ensure that the information we share is
                        up-to-date, reliable, and informative. We ensure that all of the information we maintain on this site stays up to date as best to our ability
                        and we hope to always provide you with the most accurate information about our favourite feline friends.
                    </p>

                </Col>

                <Col className="p-3">
                    <img className="aboutCatImage" src={randomCat} alt="A picture of a random cat" />
                </Col>
            </Row>

            <p className="text-center">Thank you for visiting our website and joining us in celebrating the wonderful world of cats!</p>
        </Container>
    )
}