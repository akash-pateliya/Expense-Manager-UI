<template>
  <div class="home">
      <tr>
      <td style="width:300px"><i><b>Total Spent Amount</b></i></td>
      <td style="width:100px"><b>{{dashboardObj?.totalAmount}}</b></td>
    </tr>
    <table>
      <thead>
        <tr>
        <th>Sr No</th>
        <th>Expense Date</th>
        <th>Amount</th>
        <th>Currency</th>
        <th>Category</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="expenseObj in dashboardObj?.lastFiveExpense" :key="expenseObj.id">
                    <td>{{expenseObj?.Id}}</td>
                    <td>{{expenseObj?.expenseDate}}</td>
                    <td>{{expenseObj?.amount}}</td>
                    <td>{{expenseObj?.currency}}</td>
                    <td>{{expenseObj?.category}}</td>
                    <td>{{expenseObj?.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: 'Dashboard',
  components: {
  },
  async data () {
    return {
      dashboardObj : async () => {
        const  username = sessionStorage.getItem('username')
        const  token = sessionStorage.getItem('token')
        const url = `get-dashboard?username=${username}&token=${token}`

        const response = await axios.get(url);
        return response.data;
      }
    }
  }
}
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>