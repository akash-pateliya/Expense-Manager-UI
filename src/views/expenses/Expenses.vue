<script>
import { AgGridVue } from "ag-grid-vue3";
import axios from "axios";
import { onMounted, reactive } from "vue";

export default {
  name: "App",
  components: {
    AgGridVue,
  },
  setup() {
    let rowData = reactive([]);
    onMounted(() => {
      const  username = sessionStorage.getItem('username')
      const  token = sessionStorage.getItem('token')
      const url = `get-expense?username=${username}&token=${token}`
      axios.get(url).then(remoteRowData => {
            rowData.value = remoteRowData.data.result
            console.log(remoteRowData.data.result);
          });
    })
    return {
      columnDefs: [
        { headerName: "Date", field: "expenseDate", width: 200 },
        { headerName: "Amount", field: "amount", width: 150,cellStyle: {textAlign: 'center'} },
        { headerName: "Currency", field: "currency", width: 150,cellStyle: {textAlign: 'center'} },
        { headerName: "Category", field: "category_name", width: 200,cellStyle: {textAlign: 'center'}, filter: 'true'},
        { headerName: "Description (Optional)", field: "description", width: 500,cellStyle: {textAlign: 'center'} },
      ],
      rowData
    };
  },
  methods:{
   goToAddExpense(){
   this.$router.push('/add-expense'); 
      }
  }
  };
</script>

<template>
  <button @click="goToAddExpense()" class="button" style = "display: flex; justify-content: flex-end">Add Expense</button>
  <ag-grid-vue style="width: 1350px; height: 500px;"
        class="ag-theme-alpine"
        :columnDefs="columnDefs"
        :rowData="rowData.value"
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

  .ag-header-cell-label {
   justify-content: center;
  }

  .button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
 }
</style>