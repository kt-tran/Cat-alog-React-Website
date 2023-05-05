import { Container, Row, Col } from "reactstrap";

export default function Dashboard() {
    return (
        <Container className="mt-4">
            <h1 className="text-center">Dashboard</h1>
            <Row>
                <Col className="p-3">
                    <h5 className="p-3 mission text-right">Mission Statement</h5>
                    <p className="text-right">
                        YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    </p>

                </Col>
            </Row>
        </Container>
    )
}