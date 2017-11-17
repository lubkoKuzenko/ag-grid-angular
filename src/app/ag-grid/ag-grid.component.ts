import { Component, OnInit } from '@angular/core';
import { ColumnApi, GridApi, GridOptions } from "ag-grid/main";
import { GridDataService, CountryFilterService } from '../services'
import { columns } from './columns.const'

@Component({
  selector: 'ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
  providers: [GridDataService]
})

export class AgGridComponent {
  public gridApi;
  public gridColumnApi;
  private gridOptions: GridOptions;
  public columnDefs;               // Array of Column Definitions.
  public rowBuffer;                // sets the number of rows the grid renders outside of the viewable area. The default is 10

  // Infinite Scrolling
  // public rowModelType;
  // public paginationPageSize;
  // public infiniteInitialRowCount;

  // sorting 
  public sortingOrder;

  // external filter
  public isExternalFilterPresent;
  public doesExternalFilterPass;

  // rowClassRules
  public rowClassRules;

  public country;

  constructor(
    public gridDataService: GridDataService,
    public countryFilterService: CountryFilterService
  ) {
    this.gridOptions = <GridOptions>{};
    this.columnDefs = columns;

    this.rowBuffer = 2;
    // this.paginationPageSize = 100;
    // this.rowModelType = "infinite";
    // this.infiniteInitialRowCount = 1;

    this.rowClassRules = {
      "app-ukraine": params => {
        return params.data.address.country === "Ukraine"
      }
    }

    this.countryFilterService.selectedCountry$.subscribe(country => {
      this.country = country;
      this.onFilterChanged();
    })

    this.isExternalFilterPresent = () => {
      return this.country;
    }

    this.doesExternalFilterPass = (node) => {
      return this.country ? node.data.address.country === this.country : true;
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridDataService.getInitialData().subscribe((data: any[]) => {
      this.gridOptions.api.setRowData(data);
      // Infinite Scrolling

      // params.api.setDatasource({
      //   rowCount: null,
      //   getRows: params => {
      //     console.log("asking for " + params.startRow + " to " + params.endRow);
      //     setTimeout(() => {
      //       var rowsThisPage = data.slice(params.startRow, params.endRow);
      //       var lastRow = (data.length <= params.endRow) ? data.length: -1;

      //       params.successCallback(rowsThisPage, lastRow);
      //     }, 500);
      //   }
      // });
    });

    this.gridOptions.api.sizeColumnsToFit();
  }

  onFilterChanged() {
    if (this.isExternalFilterPresent) {
      this.gridOptions.api.onFilterChanged();
    }
  }
}
