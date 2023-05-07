import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Badge } from "reactstrap";
import { NavLink } from 'react-router-dom';

export default function Dashboard() {
    return (
        <Container className="mt-4">
            <h1 className="text-center">Dashboard</h1>
            <Row>
                <Col className="mb-4">
                    <h2>Your top 3 traits</h2>
                    <h1>
                        <Badge
                            color="success"
                            pill
                        >
                            Child Friendly
                        </Badge>
                        <Badge
                            color="success"
                            pill
                        >
                            Affection
                        </Badge>
                        <Badge
                            color="success"
                            pill
                        >
                            Intelligence
                        </Badge>
                    </h1>
                </Col>
                <hr></hr>
            </Row>
            <Row>
                <Col className="col-sm-12 col-md-6 col-lg-4 p-3">
                    <NavLink to="/details/?id=lape" className="text-decoration-none text-reset">
                        <h2>Most viewed</h2>
                        <Card>
                            <img
                                alt="a cat"
                                src="https://cdn2.thecatapi.com/images/iapoHxQxL.jpg"
                            />
                            <CardBody className="text-center">
                                <CardTitle tag="h5">LaPerm</CardTitle>
                                <CardSubtitle>Thailand</CardSubtitle>
                            </CardBody>
                        </Card>
                    </NavLink>
                </Col>
                <Col className="col-sm-12 col-md-6 col-lg-4 p-3">
                    <h2>Recently viewed</h2>
                    <NavLink to="/details/?id=munc" className="text-decoration-none text-reset">
                        <Card>
                            <img
                                alt="a cat"
                                src="https://cdn2.thecatapi.com/images/njaF1fyqI.jpg"
                            />
                            <CardBody className="text-center">
                                <CardTitle tag="h5">Munchkin</CardTitle>
                                <CardSubtitle>Thailand</CardSubtitle>
                            </CardBody>
                        </Card>
                    </NavLink>
                </Col>
                <Col className="col-sm-12 col-md-6 col-lg-4 p-3">
                    <h2>You might like...</h2>
                    <NavLink to="/details/?id=norw" className="text-decoration-none text-reset">
                        <Card>
                            <img
                                alt="a cat"
                                src="https://cdn2.thecatapi.com/images/7x-75d7vB.jpg"
                            />
                            <CardBody className="text-center">
                                <CardTitle tag="h5">Norwegian Forest Cat</CardTitle>
                                <CardSubtitle>Norway</CardSubtitle>
                            </CardBody>
                        </Card>
                    </NavLink>
                </Col>
            </Row>

        </Container>
    )
}