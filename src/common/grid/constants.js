// import { getCachedFormattedDate } from '../../utils/dateUtil';

export const OverlayNoRowsTemplate = '<span class="ag-overlay-loading-center">Use search to query data</span>';
export const OverlayLoadingsemplate = '<span class="ag-overlay-loading-center">Please wait while rows are loading</span>';
export const OverlayErrorLoadingTemplate = '<span style=\"padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;\">Error while fetching data.Please refer Notification Panel for more details</span>';


export const SideBar = {
    toolPanels: [
        {
            id: "columns",
            labelDefault: "Columns",
            labelKey: "columns",
            iconKey: "columns",
            toolPanel: "agColumnsToolPanel",
            toolPanelParams: {
                suppressValues: true,
                suppressPivotMode: true
            }
        },
        {
            id: "filters",
            labelDefault: "Filters",
            labelKey: "filters",
            iconKey: "filter",
            toolPanel: "agFiltersToolPanel"
        }
    ],
};
export const StatusBar = {
    statusPanels: [
        {
            statusPanel: 'agTotalAndFilteredRowCountComponent',
            align: 'left'
        },
        { statusPanel: 'agSelectedRowCountComponent', align: 'left' },
        { statusPanel: 'agAggregationComponent' }
    ]
};
export const DefaultColDef = {
    enableRowGroup: true,
    enablePivot: false,
    enableValue: true,
    width: 100,
    resizable: true,
    sortable: true,
    filter: "agTextColumnFilter",
    menuTabs: ["generalMenuTab"]
};

const dateValueGetter = function (params) {
    if (params && params.column && params.column.colId) {
        const colId = params.column.colId;
        if (params.data) {
            // return getCachedFormattedDate(params.data[colId]);
        }
    }
    return null;
}
const dateComparator = (filterLocalDateAtMidnight, cellValue) => {
    if (cellValue == null)
        return -1;

    var cellDate = new Date(cellValue);

    if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
        return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
        return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
        return 1;
    }
}
export const ColumnTypes = {
    "date": { width: 175, valueGetter: dateValueGetter, filter: 'agDateColumnFilter', filterParams: { comparator: dateComparator } },
    "int": { filter: 'agNumberColumnFilter' },
    "long": { filter: 'agNumberColumnFilter' },
    "double": { filter: 'agNumberColumnFilter' },
    "string": { filter: 'agSetColumnFilter' },
    "bool": { filter: 'agSetColumnFilter' },
}

export const enhance = (columnsInfo, options) => {

    let columnDefs = [];

    if (options.showSelectColumn) {
        columnDefs.push({
            headerName: "",
            field: "Select",
            width: 50,
            checkboxSelection: true,
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            suppressMenu: true,
            filter: false,
            // pinned: 'left',
            sortable: false,
            suppressSizeToFit: true
        })
    }
    if (columnsInfo) {
        columnsInfo.forEach((columnInfo) => {
            const columnDef = {
                field: columnInfo.Name,
                headerName: columnInfo.DisplayName,
                headerTooltip: columnInfo.DisplayName,
                lockPinned: true,
                cellClass: "lock-pinned",
                hide: !columnInfo.CanShow,
                type: columnInfo.Type,
                pinnedRowCellRenderer: (param) => {
                    param.eGridCell.style.backgroundColor = 'rgba(196, 214, 193, 0.87)';
                    param.eGridCell.style.color = 'rgba(0, 0, 0, 0.87)';
                    return param.value
                },
            };
            columnDefs.push(columnDef);
        });
    }

    return columnDefs;
};