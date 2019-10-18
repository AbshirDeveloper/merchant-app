import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './index.css'

class GridExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gridOptions: {
                rowStyle: {
                    width: '100%'
                }
            },
            columnDefs: [
                {
                    headerName: "Badeeco",
                    field: "badeeco",
                    headerCheckboxSelection: true,
                    headerCheckboxSelectionFilteredOnly: true,
                    checkboxSelection: true,
                    suppressSizeToFit: true,
                    width: 300
                },
                {
                    headerName: "Inta Xabo",
                    field: "intaxabo",
                    suppressSizeToFit: true,
                    width: 100
                },
                {
                    headerName: "Qiimo halkii xabo",
                    field: "halxabo",
                    suppressSizeToFit: true,
                    width: 200
                },
                {
                    headerName: "Iskudar",
                    field: "iskudar",
                    suppressSizeToFit: true,
                    width: 100
                }
            ],
            defaultColDef: {
                resizable: true,
                width: 100
            },
            rowSelection: "multiple",
            rowData: [{
                badeeco: 'bur',
                intaxabo: 5,
                halxabo: 3,
                iskudar: 15
            }]
        };
    }

    render() {
        return (
            <div style={{ width: "710px", height: "100%" }}>
                <div style={{ height: "100%" }} className="ag-theme">
                    <div
                        id="myGrid"
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                        className="ag-theme-balham"
                    >
                        <AgGridReact
                            gridOptions={this.state.gridOptions}
                            columnDefs={this.state.columnDefs}
                            defaultColDef={this.state.defaultColDef}
                            suppressRowClickSelection={true}
                            rowSelection={this.state.rowSelection}
                            rowData={this.props.cart}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default GridExample