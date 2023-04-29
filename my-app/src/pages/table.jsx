import { AgGridReact } from "ag-grid-react";
import { Row } from "reactstrap";
import React, { useState, useEffect } from "react";
import { getBreedList } from "../components/api";

export default function CatTable() {
    const [rowData, setRowData] = useState([]);

    const columns = [
        { headerName: "Name", field: "name" },
        { headerName: "ID", field: "id" },
        { headerName: "Country", field: "country" },
    ];

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds`)
            .then(res => res.json())
            .then(data => data.map(cat => {
                return {
                    id: cat.id,
                    name: cat.name,
                    //weight: cat.,
                    country: cat.origin
                    //lifespan:
                };
            })
            )
            .then(cats => setRowData(cats));
    }, []);

    return (
        <div className="container mt-3">
            <Row className="mb-3">
                <h1> Cat-egories </h1>
            </Row>
            <Row className="catTable">
                <div className="ag-theme-alpine" style={{
                    height: '100%',
                    width: '100%',
                }}>
                    <AgGridReact
                        columnDefs={columns}
                        rowData={rowData}
                        pagination={true}
                    />
                </div>
            </Row>
        </div>
    )
}