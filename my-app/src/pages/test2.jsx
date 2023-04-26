import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { AgGridReact } from "ag-grid-react";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function Test2() {
    const [rowData, setRowData] = useState([]);
    const columns = [
        { headerName: "Title", field: "title" },
        { headerName: "Author", field: "author" },
        { headerName: "Edition Count", field: "editionCount" },
        { headerName: "Book ID", field: "id" }
    ];

    useEffect(() => {
        fetch("https://openlibrary.org/subjects/drama.json?published_in=2000")
            .then(res => res.json())
            .then(data => data.works)
            .then(works => 
                works.map(book => {
                    return {
                        title: book.title,
                        author: book.authors[0].name,
                        editionCount: book.edition_count,
                        id: book.cover_id
                    };
                })
            )
            .then(books => {
                setRowData(books);
            })
    }, []);


    return (
        <main className="container">
            <h1>Hello World</h1>
            <Button
                color="danger"
                onClick={() => console.log("test")}
            >
                Click me!
            </Button>

            <div className="ag-theme-alpine" style={{ height: '75vh' }}>
                <AgGridReact
                    columnDefs={columns}
                    rowData={rowData}
                >
                </AgGridReact>
            </div>

        </main>
    )
}