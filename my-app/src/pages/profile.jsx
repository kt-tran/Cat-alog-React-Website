import { Container, Row, Col } from "reactstrap";

export default function Profile() {
    return (
        <Container className="mt-4">
            <h1 className="text-center">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
            <Row>
                <Col className="p-3">
                    <h5 className="p-3 mission text-right">Mission Statement</h5>
                    <p className="text-right">
                        Our mission is to simply share information, facts and knowledge about cat breeds for anyone interested in cats. We hope to provide meaningful information
                        useful to both the seasoned cat-crazy owner and to the first-time owner who needs just that little more before purchasing or committing to their future furry friend.<br></br> 
                        <br></br>We love cats and we hope that with this website, you'll love them too.
                    </p>

                </Col>

                <Col className="p-3">
                    <img className="aboutCatImage" src="https://images.pexels.com/photos/1440387/pexels-photo-1440387.jpeg" alt="a tabby cat's paw rests atop a silver keyboard with black keys" />
                </Col>
            </Row>

            <Row>
                <Col className="p-3">
                    <img className="aboutCatImage" src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg" alt="a orange haired cat with amber eyes against a blurred predominately white backround" />
                </Col>

                <Col className="p-3">
                    <h5 className="p-3 mission">Why Cats?</h5>
                    <p>
                        We believe that all pets are more than just animal companions - they're family members too. While dogs have an appeal unique to them,
                        cats are beautiful, loving creatures who we believe deserve a little more love. 
                    </p>
                    <p>
                        Throughout history, cats have been humans' companions for a long time, and while they have faded in and out of companionship vs free-range predators, cats can offer
                        unique connections and life lessons.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col className="p-3">
                    <h5 className="p-3 mission text-right">Our Team</h5>
                    <p className="text-right">
                        While our team works hard to update our information, some data may not be the most recent or accurate. Please always research further for any medical inquiries or contact your closest vet
                        to confirm any information before making a big decision.
                    </p>
                    <p className="text-right">
                        We are always looking for new ideas and feedback to improve our platform, so please don't hesitate to reach out to us with any suggestions or questions.
                    </p>
                </Col>

                <Col className="p-3">
                    <img className="aboutCatImage" src="https://images.pexels.com/photos/20787/pexels-photo.jpg" alt="A black, cream and brown coloured cat with green eyes looking up to the camera from below." />
                </Col>
            </Row>

            <p className="text-center">Thank you for visiting our website. We hope you enjoyed the wonderful world of cats!</p>
        </Container>
    )
}