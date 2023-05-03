import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from "reactstrap";
import { AffectionRenderer } from "../components/affectionRenderer";
import { ChildfriendlyRenderer } from "../components/childfriendlyRenderer";
import { HypoallergenicRenderer } from "../components/hypoallergenicRenderer";
import { EnergeticRenderer } from "../components/energeticRenderer";
import { IntelligenceRenderer } from "../components/intelligenceRenderer";
import { HandleGetList, GetCatImage } from "../components/api";
import { CustomCarousel } from '../components/carousel';


export default function Details() {
    const { loading, list, error } = HandleGetList();
    let cat = list.find((list) => list.id === "birm");


    const [imageloading, setImageLoading] = useState(true);
    const [catImageObj, setCatImageObj] = useState([]);
    const [imageError, setImageError] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                setCatImageObj(await GetCatImage("beng"));
                setImageLoading(false);
            } catch (imageError) {
                setImageError(imageError);
                setImageLoading(false);
            }
        })();
    }, []);
    console.log(catImageObj);

    if (loading || imageloading) {
        return (
            <Container className="mt-3">
                <h1 className="text-center">Loading...</h1>
                <Container>
                    {/* TODO: add a loading gif */}
                </Container>
            </Container>);
    } else if (error || imageError) {
        return (
            <Container className="mt-3">
                <h1 className="text-center">An error has occurred.</h1>
                <Container>
                    {/* TODO: add a loading gif */}
                </Container>
            </Container>
        );
    } else {
        return (
            <Container className="mt-3">
                <h1>{cat.name}</h1>
                {cat.alt_names === "" ? null : <div>  Also known as {cat.alt_names} </div>}
                <Container>
                    <Row>
                        <Col >
                            {/* <img className="imageStyle" src={catImageObj[0].url}/> */}
                            <CustomCarousel className="imageStyle"></CustomCarousel>
                        </Col>
                        <Col>
                            {/* <p>description:{useTestAPI().image[0].url}</p> */}
                            <div className="container"> {cat.description} </div>

                            <div>
                                Affection: <AffectionRenderer value={cat.affection_level} />
                            </div>
                            <div>
                                Child-friendly: <ChildfriendlyRenderer value={cat.child_friendly} />
                            </div>
                            <div>
                                Energy: <EnergeticRenderer value={cat.energy_level} />
                            </div>
                            <div>
                                Intelligence: <IntelligenceRenderer value={cat.intelligence} />
                            </div>
                            <div>
                                Hypoallergenic: <HypoallergenicRenderer value={cat.hypoallergenic} />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}