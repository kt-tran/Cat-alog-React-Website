import { AgGridReact } from "ag-grid-react";
import { Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HandleGetList } from "../components/api";
import { AffectionRenderer } from "../components/affectionRenderer";
import { ChildfriendlyRenderer } from "../components/childfriendlyRenderer";
import { HypoallergenicRenderer } from "../components/hypoallergenicRenderer";
import { EnergeticRenderer } from "../components/energeticRenderer";
import { IntelligenceRenderer } from "../components/intelligenceRenderer";

export default function CatTable() {
    let textCustomFilterParams = {
        filterOptions: ['contains']
    };

    let numCustomFilterParams = {
        filterOptions: ['equals', 'lessThan', 'greaterThan', 'inRange']
    }

    const navigate = useNavigate();
    const paginationSize = 14;

    const [rowData, setRowData] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        { headerName: "Name", field: "name", filter: 'agTextColumnFilter', filterParams: textCustomFilterParams },
        { headerName: "Country", field: "country", filter: 'agTextColumnFilter', filterParams: textCustomFilterParams },
        { headerName: "Weight Range (kg)", field: "weight", sortable: true },
        { headerName: "Average Lifespan (years)", field: "lifespan", sortable: true },
        { headerName: "Intelligence", field: "intelligence", cellRenderer: IntelligenceRenderer, filter: 'agNumberColumnFilter', filterParams: numCustomFilterParams },
        { headerName: "Affection Meter", field: "affection", cellRenderer: AffectionRenderer, filter: 'agNumberColumnFilter', filterParams: numCustomFilterParams },
        { headerName: "Energy Meter", field: "energy", cellRenderer: EnergeticRenderer, filter: 'agNumberColumnFilter', filterParams: numCustomFilterParams },
        { headerName: "Hypoallergenic", field: "hypoallergenic", cellRenderer: HypoallergenicRenderer, sortable: true },
        { headerName: "Childfriendly", field: "childfriendly", cellRenderer: ChildfriendlyRenderer, filter: 'agNumberColumnFilter', filterParams: numCustomFilterParams },
    ]);

    const { loading, list, error } = HandleGetList();

    function GetRowData() {
        if (loading === false & error === null) {
            return list.map((cat) => (
                {
                    name: cat.name,
                    lifespan: cat.life_span,
                    country: cat.origin,
                    weight: cat.weight.metric,
                    affection: cat.affection_level,
                    energy: cat.energy_level,
                    childfriendly: cat.child_friendly,
                    hypoallergenic: cat.hypoallergenic,
                    intelligence: cat.intelligence
                }
            ))
        } else if (error !== null) {
            return (
                <div>
                    Uh oh. An error occurred. Please try again later.
                </div>
            )
        }
    };

    return (
        <div className="container-fluid px-4 mt-3">
            <Row className="text-center mb-3">
                <h1> Species of Cats </h1>
            </Row>
            <Row>
                <div className="ag-theme-alpine catTable">
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={GetRowData()}
                        pagination={true}
                        paginationPageSize={paginationSize}
                        onRowClicked={(
                            row) => {
                            console.log("row clicked", row.data.name)
                            navigate("/itemtest");
                        }}
                    />
                </div>
            </Row>
        </div>
    )
}