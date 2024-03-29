import { Link } from "react-router-dom";
import { Row } from "reactstrap";

export default function NotFound() {
    return (
        <div className="container error">
            <Row className="mt-4 text-center">
                <h1>Oops! Something went wrong.</h1>
            </Row>
            <Row className="mt-3 text-center">
                <p>Please try these links instead:</p>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
            </Row>

        </div>
    )
}