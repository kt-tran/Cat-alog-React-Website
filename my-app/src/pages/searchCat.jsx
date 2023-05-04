import React, { useState, useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardTitle, Container, Col, Row } from "reactstrap";
import { HandleGetList, GetCatImage } from "../components/api";

export default function SearchCat() {
    const { loading, list, error } = HandleGetList();
    const [query, setQuery] = useState("")

    const [imageloading, setImageLoading] = useState(true);
    const [catImageObj, setCatImageObj] = useState([]);
    const [imageError, setImageError] = useState(null);

    return (
        <div>
            <Container className="text-center mt-2">
                <h1>Search for a cat</h1>
            </Container>

            <Container>
                <input placeholder="Enter a cat species" onChange={event => setQuery(event.target.value)} />
            </Container>

            <Container className="d-flex">
                <Row>
                    {list.filter(card => {
                        if (query === '') {
                            return card;
                        }
                    }).map((cat) => (
                        // useEffect(() => {
                        //     (async () => {
                        //         try {
                        //             setCatImageObj(await GetCatImage(list.id));
                        //             setImageLoading(false);
                        //         } catch (imageError) {
                        //             setImageError(imageError);
                        //             setImageLoading(false);
                        //         }
                        //     })();
                        // }, [])
                        // // console.log(catImageObj);
                        < Col sm="4" className="my-3" >
                            <Card>
                                <img
                                    alt="Picture of a cat"
                                    src="https://picsum.photos/300/200"
                                    style={{ height: "200px", width: "400px" }}
                                />
                                <CardBody>
                                    <CardTitle key={cat.id} tag="h5">{cat.name}</CardTitle>
                                    <CardSubtitle>{cat.origin}</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        </div >
    );
}