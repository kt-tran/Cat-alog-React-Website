import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from "reactstrap";
import { useSearchParams } from "react-router-dom";
import { HandleGetList, GetCatImageList } from "../components/api";
import { CustomCarousel } from '../components/carousel';
import { BadgesDetail } from '../components/badgesDetail';
import BarChartDetails from '../components/barChartDetail';

export default function Details() {
    const { loading, list, error } = HandleGetList();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    let cat = list.find((list) => list.id === id);


    const [imageLoading, setImageLoading] = useState(true);
    const [catImageObj, setCatImageObj] = useState([]);
    const [imageError, setImageError] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                setCatImageObj(await GetCatImageList(id));
                setImageLoading(false);
            } catch (imageError) {
                setImageError(imageError);
                setImageLoading(false);
            }
        })();
    }, [id]);


    if (loading || imageLoading) {
        return (
            <Container className="my-5 pb-5">
                <h1 className="text-center mb-5 pb-5">Loading...</h1>
                <Container className="text-center mb-3">
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="a loading icon is spinning" />
                </Container>
                <Container className="text-end">
                    <img src="https://thumbs.gfycat.com/AnotherSimilarHoiho-max-1mb.gif" alt="a cat drawn in black pencil walks along before stopping, yawning and falling over" />
                </Container>
            </Container>);
    } else if (error || imageError) {
        return (
            <Container className="my-5 pb-5">
                <h1 className="text-center mb-5 pb-5">An error has occurred. Please try again later.</h1>
                <Container className="text-center mb-5 pb-5">
                    <img src="https://cliply.co/wp-content/uploads/2021/09/142109670_SAD_CAT_400.gif" alt="a drawn pale pink cat is frowning" />
                </Container>
            </Container>
        );
    } else {
        return (
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h1 className="text-center">{cat.name}</h1>
                        {cat.alt_names === undefined || cat.alt_names.trim().length === 0 ? null : <div> Also known as {cat.alt_names} </div>}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className='ps-0'>
                        <CustomCarousel imagelist={catImageObj} className="imageStyle"></CustomCarousel>
                    </Col>
                    <Col className='ps-4'>
                        <Row>
                            <Col className="justify-content-center d-flex align-items-center mb-3">
                                <BadgesDetail cat={cat} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>Common traits: {cat.temperament}.</Row>
                                <Row className="mt-3"> {cat.description} </Row>

                                <Row className="mt-3">The average {cat.name} weighs {cat.weight.metric} kilograms.</Row>
                                <Row>They typically live for {cat.life_span} years.</Row>
                                <Row className="mt-3">Breed origin: {cat.origin}</Row>
                                <Row className="mt-5"> More information can be found via the following links:</Row>
                                <Row>
                                    <Col className="text-center">
                                        <Row>
                                            {cat.vcahospitals_url === undefined || cat.vcahospitals_url.trim().length === 0 ? null : <a href={cat.vcahospitals_url}>VCA Animal Hospitals</a>}
                                        </Row>
                                        <Row>
                                            {cat.wikipedia_url === undefined || cat.wikipedia_url.trim().length === 0 ? null : <a href={cat.wikipedia_url}>Wikipedia</a>}
                                        </Row>
                                    </Col>
                                    <Col className="text-center">
                                        <Row>
                                            {cat.cfa_url === undefined || cat.cfa_url.trim().length === 0 ? null : <a href={cat.cfa_url}>The Cat Fanciers' Association</a>}
                                        </Row>
                                        <Row>
                                            {cat.vetstreet_url === undefined || cat.vetstreet_url.trim().length === 0 ? null : <a href={cat.vetstreet_url}>Vet Street</a>}
                                        </Row>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mx-3 my-3">
                    <BarChartDetails cat={cat} />
                </Row>
            </Container>
        );
    }
}