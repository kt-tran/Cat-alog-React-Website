import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle, Container, Col, Row } from "reactstrap";
import { HandleGetList } from "../utilities/api";
import { GetCountries, GetBreeds } from "../utilities/options";
import Select from 'react-select'

export default function Search() {
    const { loading, list, error } = HandleGetList();
    const [query, setQuery] = useState();
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
        setQuery(selectedOption.value);
        let res = []

        list.forEach(cat => {
            if (cat.origin === selectedOption.value) {
                res.push(cat);
            }
        })

        setSearchRes(res);
    }

    const handleChangeCat = (selectedOption) => {
        setQuery(selectedOption.value);
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

function MakeCard() {

}