import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {
    DefaultColDef, StatusBar, SideBar, ColumnTypes, enhance
} from './constants';
import { connect } from 'react-redux';


class AgGrid extends Component {
    _gridApi
    _columnApi
    constructor(props) {
        super(props)
        this._gridOptions = {
            rowSelection: 'multiple',
            // rowGroupPanelShow: 'always',
            defaultColDef: DefaultColDef,
            statusBar: StatusBar,
            columnTypes: ColumnTypes,
            sideBar: SideBar,
            floatingFilter: true,
            groupMultiAutoColumn: true,
            rowGroupPanelShow: 'always',
            groupSelectsChildren: true,
            enableRangeSelection: true,
            suppressRowClickSelection: true,
            // scrollbarWidth: 25,
        };
        this.state = {
            columnDefs: [],
            rowData: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.props)
            this._gridApi && this._gridApi.sizeColumnsToFit();
        }, 0)
    }

    componentDidUpdate() {
        setTimeout(() => {
            this._gridApi && this._gridApi.sizeColumnsToFit();
        }, 0)
    }

    handleOnGridReady = (event) => {
        if (event && event.api && event.columnApi) {
            this._gridApi = event.api;
            this._columnApi = event.columnApi;

            if (this.props.isDataLoading) {
                this._gridApi.showLoadingOverlay();
            }
        }
    };

    render() {
        const columnDefs = enhance(this.props.columnDefs, {
            showSelectColumn: true,
            disableSortColumnsList: []
        })
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '100%',
                    width: '101%'
                }}
            >
                <AgGridReact
                    gridOptions={this._gridOptions}
                    columnDefs={columnDefs}
                    rowData={this.props.rowData}
                    onGridReady={this.handleOnGridReady}
                >
                </AgGridReact>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.main.menu,
    }
}

export default connect(mapStateToProps, null)(AgGrid);