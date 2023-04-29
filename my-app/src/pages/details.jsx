import { Col, Row } from "reactstrap";
import { FaCat } from "react-icons/fa";

import { getBreedList, useTestAPI } from "../components/api";

export default function Details() {

   // console.log(useTestAPI());

    return (
        <div className="container mt-3">
            <h1>*Insert item name*</h1>
            <div className="container">
                <Col>
                    {/* <p>description:{useTestAPI().image[0].url}</p> */}

                </Col>
                <Col>
                    IMAGE
                    <FaCat/>
                </Col>
            </div>
        </div>
    );
}