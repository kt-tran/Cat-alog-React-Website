import { Container, Row, Col, Table, NavLink, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default function Profile() {
    return (
        <Container className="mt-4">
            <h1 className="text-center">Your Profile</h1>
            <Row>
                <Col className="p-3">
                    <img className="profile" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                    <h3 className="text-center">John Smith</h3>
                </Col>
                
                <Col className="p-3 mt-5">
                    <Table striped>
                        <tbody>
                            <tr>
                            <th scope="row">
                                Name
                            </th>
                            <td>
                                John Smith
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                Email
                            </th>
                            <td>
                                johnsmith123@email.com
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                Phone Number
                            </th>
                            <td>
                                0412 345 678
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="col-sm-12 col-md-6 col-lg-4">
                    <NavLink to="/details/?id=lape" className="text-decoration-none text-reset">
                        <h2>Your Favourite Breed</h2>
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
            </Row>
        </Container>
    )
}