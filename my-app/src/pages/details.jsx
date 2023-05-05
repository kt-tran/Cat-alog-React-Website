import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from "reactstrap";
import { useSearchParams } from "react-router-dom";
import { AffectionRenderer } from "../components/affectionRenderer";
import { ChildfriendlyRenderer } from "../components/childfriendlyRenderer";
import { HypoallergenicRenderer } from "../components/hypoallergenicRenderer";
import { EnergeticRenderer } from "../components/energeticRenderer";
import { IntelligenceRenderer } from "../components/intelligenceRenderer";
import { HandleGetList, GetCatImageList } from "../components/api";
import { CustomCarousel } from '../components/carousel';
import { BadgesDetail } from '../components/badgesDetail';
import BarChartDetails, { BarChart } from '../components/barChartDetail';

export default function Details() {
    const { loading, list, error } = HandleGetList();
    const [ searchParams ] = useSearchParams();
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
    }, []);

    // const Data = {
    //     labels: ['Red', 'Orange', 'Blue'],
    //     // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    //     datasets: [
    //         {
    //           label: 'Popularity of colours',
    //           data: [55, 23, 96],
    //           // you can set indiviual colors for each bar
    //           backgroundColor: [
    //             'rgba(255, 255, 255, 0.6)',
    //             'rgba(255, 255, 255, 0.6)',
    //             'rgba(255, 255, 255, 0.6)'
    //           ],
    //           borderWidth: 1,
    //         }
    //     ]
    // }
    // const [chartData, setChartData] = useState({
    //     labels: Data.map((data) => data.year), 
    //     datasets: [
    //       {
    //         label: "Users Gained ",
    //         data: Data.map((data) => data.userGain),
    //         backgroundColor: [
    //           "rgba(75,192,192,1)",
    //           "#ecf0f1",
    //           "#50AF95",
    //           "#f3ba2f",
    //           "#2a71d0"
    //         ],
    //         borderColor: "black",
    //         borderWidth: 2
    //       }
    //     ]
    // });

    if (loading || imageLoading) {
        return (
            <Container className="my-5 pb-5">
                <h1 className="text-center mb-5 pb-5">Loading...</h1>
                <Container className="text-center mb-3">
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
                </Container>
                <Container className="text-end">
                    <img src="https://thumbs.gfycat.com/AnotherSimilarHoiho-max-1mb.gif" />
                </Container>
            </Container>);
    } else if (error || imageError) {
        return (
            <Container className="my-5 pb-5">
                <h1 className="text-center mb-5 pb-5">An error has occurred. Please try again later.</h1>
                <Container className="text-center mb-5 pb-5">
                    <img src="https://cliply.co/wp-content/uploads/2021/09/142109670_SAD_CAT_400.gif" />
                </Container>
            </Container>
        );
    } else {
        return (
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h1>{cat.name}</h1>
                        {cat.alt_names.trim().length === 0 || cat.alt_names === undefined ? console.log(cat.alt_names) : <div> Also known as {cat.alt_names} </div>}
                    </Col>
                    <Col className="justify-content-center d-flex align-items-center">
                        <BadgesDetail cat={cat} />
                    </Col>
                </Row>
                <Container className="mt-3">
                    <Row>
                        <Col className='ps-0'>
                            {/* <img className="imageStyle" src={catImageObj[0].url}/> */}
                            <CustomCarousel imagelist={catImageObj} className="imageStyle"></CustomCarousel>
                        </Col>
                        <Col>
                            {/* <BarChart chartData={chartData} /> */}
                            <div className="container"> {cat.description} </div>

                            {/* <div>
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
                            </div> */}

                            <BarChartDetails cat={cat}/>

                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}