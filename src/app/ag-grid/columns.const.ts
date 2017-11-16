// https://www.ag-grid.com/javascript-grid-column-properties

import { countryCellRenderer } from './custom-cell-renderer'

export const columns = [
  {
    headerName: "Index",
    width: 50,
    valueGetter: "node.id",
    cellRenderer: params => {
      if (params.value !== undefined) {
        var index = parseInt(params.value, 10) + 1;

        return index.toString();
      } else {
        return '<img src="../../assets/loading.gif">';
      }
    }
  }, {
    headerName: "Name",
    field: "name"
  }, {
    headerName: "Email",
    field: "email"
  }, {
    headerName: "Phone",
    field: "phone"
  }, {
    headerName: "Website",
    field: "website"
  }, {
    headerName: "Company",
    field: "company.name"
  }, {
    headerName: "Country",
    field: "address.country",
    cellRenderer: countryCellRenderer
  }
];