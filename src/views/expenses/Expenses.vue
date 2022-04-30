<script>
import { AgGridVue } from "ag-grid-vue3";

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
    return {
      columnDefs: [
        { headerName: "DateTime", field: "DateTime", width: 300,cellStyle: {textAlign: 'center'} },
        { headerName: "Amount", field: "Amount", width: 150,cellStyle: {textAlign: 'center'} },
        { headerName: "Currency", field: "Currency", width: 150,cellStyle: {textAlign: 'center'} },
        { headerName: "Description (Optional)", field: "Description", width: 200,cellStyle: {textAlign: 'center'} },
        { headerName: "Category", field: "Category", width: 100,cellStyle: {textAlign: 'center'} }
      ],
      rowData: [
        { DateTime: new Date, Amount: 100, Currency: "Rupee", Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: new Date, Amount: 100, Currency: "Rupee", Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: new Date, Amount: 100, Currency: "Rupee", Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: new Date, Amount: 100, Currency: "Rupee", Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: new Date, Amount: 100, Currency: "Rupee", Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: new Date, Amount: 100, Currency: "Rupee", Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: new Date, Amount: 100, Currency: "Rupee", Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: new Date, Amount: 100, Currency: "Rupee", Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: new Date, Amount: 100, Currency: "Rupee", Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: new Date, Amount: 100, Currency: "Rupee", Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
        { DateTime: "Toyota", Amount: "Celica", Currency: 35000, Description : 'desc', Category : 's'},
      ],
    };
  },
  };
</script>

<template>
  <ag-grid-vue style="width: 1350px; height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData"
        :pagination = "true">
    </ag-grid-vue>
</template>

<style lang="scss">
  @import "../../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";

  .ag-header-cell.text-center {
    .ag-header-cell-label {
      justify-content: center;
    }
  }
</style>