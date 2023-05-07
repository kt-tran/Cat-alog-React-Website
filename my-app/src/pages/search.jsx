import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle, Container, Col, Row } from "reactstrap";
import { HandleGetList } from "../utilities/api";
import { GetCountries } from "../utilities/options";
import Select from 'react-select'

export default function Search() {
    const { loading, list, error } = HandleGetList();
    const [choice, setChoice] = useState();
    const countries = GetCountries();

    let options = [
        { value: "name", label: "Breed" },
        { value: "origin", label: "Country" }
    ]

    let countryList = countries.map((country) => (
        { value: country, label: country }
    ));
    const CountryOptions = countryList

    const CatOptions = list.map((cat) => (
        { value: cat.name, label: cat.name }
    ));


    const [searchRes, setSearchRes] = useState([]);

    useEffect(() => {
        setSearchRes(list);
    }, [list])


    const handleChangeCountry = (selectedOption) => {
        let res = []

        list.forEach(cat => {
            if (cat.origin === selectedOption.value) {
                res.push(cat);
            }
        })

        setSearchRes(res);
    }

    const handleChangeCat = (selectedOption) => {
        let res = []

        list.forEach(cat => {
            if (cat.name === selectedOption.value) {
                res.push(cat);
            }
        })

        setSearchRes(res);
    }

    const handleChangeCategory = (selectedOption) => {
        setChoice(selectedOption.value);
    }

    if (loading) {
        return (
            <Container className="my-5 pb-5">
                <h1 className="text-center mb-5 pb-5">Loading...</h1>
                <Container className="text-center mb-3">
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
                </Container>
                <Container className="text-end">
                    <img src="https://thumbs.gfycat.com/AnotherSimilarHoiho-max-1mb.gif" alt="a cat drawn in black pencil walks along before stopping, yawning and falling over" />
                </Container>
            </Container>);
    } else if (error) {
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
            <div>
                <Container className="text-center mt-3">
                    <h1>Search for a breed</h1>
                </Container>

                <Container>
                    <Row>
                        <Col className="col-6">
                            <Select options={options} onChange={handleChangeCategory} />
                        </Col>
                        <Col className="col-6">
                            {choice === "origin" ?
                                <Select options={CountryOptions} onChange={handleChangeCountry} /> :
                                null
                            }
                            {choice === "name" ?
                                <Select options={CatOptions} onChange={handleChangeCat} /> :
                                null
                            }

                        </Col>
                    </Row>
                </Container>

                <Container className="d-flex">
                    <Row className="row-cols-auto d-flex justify-content-center">
                        {searchRes.map((cat) => (
                            <Col className="my-3 searchCard" key={cat.id}>
                                <NavLink to={`/details/?id=${cat.id}`} className="text-decoration-none text-reset">
                                    <Card className="searchCard">
                                        <img
                                            alt={`a ${cat.name} cat`}
                                            src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                                        />
                                        <CardBody>
                                            <CardTitle key={cat.id} tag="h5">{cat.name}</CardTitle>
                                            <CardSubtitle>{cat.origin}</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </NavLink>
                            </Col>
                        ))
                        }
                    </Row>
                </Container>
            </div >
        );
    }
}