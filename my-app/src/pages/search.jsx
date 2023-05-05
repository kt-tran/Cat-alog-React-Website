import React, { useState, useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardTitle, Container, Col, Row } from "reactstrap";
import { HandleGetList, GetCatImage } from "../components/api";
import Select from 'react-select'

export default function Search() {
    const { loading, list, error } = HandleGetList();
    const [query, setQuery] = useState("")

    const [imageloading, setImageLoading] = useState(true);
    const [catImageObj, setCatImageObj] = useState([]);
    const [imageError, setImageError] = useState(null);
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <div>
            <Container className="text-center mt-3">
                <h1>Search for a cat</h1>
            </Container>

            <Container>
                <input placeholder="Enter a cat species" onChange={event => setQuery(event.target.value)} />
                <Select options={options} />
            </Container>

            <Container className="d-flex">
                <Row className="row-cols-auto">
                    {list.filter(card => {
                        if (query === '') {
                            return card;
                        } else if (card.name.includes(query))
                            return card;
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
                        < Col className="my-3" >
                            <Card>
                                <img
                                    alt="a cat"
                                    src="https://picsum.photos/300/200"
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