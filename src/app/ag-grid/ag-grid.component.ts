import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid/main";
import { GridDataService } from '../services'
import { columns } from './columns.const'

@Component({
  selector: 'ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css'],
  providers: [ GridDataService ]
})

export class AgGridComponent {
  private gridApi;
  private gridColumnApi;
  private columnDefs;               // Array of Column Definitions.
  private rowBuffer;                // sets the number of rows the grid renders outside of the viewable area. The default is 10
  
  // Infinite Scrolling
  private rowModelType;
  private paginationPageSize;
  private infiniteInitialRowCount;

  constructor(
    public gridDataService: GridDataService
  ) {
    this.rowBuffer = 2;
    this.paginationPageSize = 100;
    this.rowModelType = "infinite";
    this.infiniteInitialRowCount = 1;
    this.columnDefs = columns;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // Infinite Scrolling
    this.gridDataService.getInitialData().subscribe((data: any[]) => {
      params.api.setDatasource({
        rowCount: null,
        getRows: params => {
          console.log("asking for " + params.startRow + " to " + params.endRow);
          setTimeout(() => {
            var rowsThisPage = data.slice(params.startRow, params.endRow);
            var lastRow = (data.length <= params.endRow) ? data.length: -1;
            
            params.successCallback(rowsThisPage, lastRow);
          }, 500);
        }
      });
    });
    params.api.sizeColumnsToFit();
  }
}
