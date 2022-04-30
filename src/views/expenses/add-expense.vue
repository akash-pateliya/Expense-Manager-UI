<template>
    <div class="container" id="app">
        <form @submit.prevent="addExpense">
            <div class="row">
                <div class="col-25">
                    <label>Expense Date</label>
                </div>
                <div class="col-75">
                    <input type="text" placeholder="Enter date in DD/MM/YYYY Format.." v-model="expenseDate">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label>Amount</label>
                </div>
                <div class="col-75">
                    <input type="text" placeholder="Enter amount..." v-model="amount">
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label>Currency</label>
                </div>
                <div class="col-75">
                    <input type="text" placeholder="Enter currency" v-model="currency">
                </div>
            </div>
            <div class="col-25">
                <label>Category</label>
            </div>
            <div class="row">
                <div class="col-75">
                    <select v-model="category_id">
                        <option value="1">Home</option>
                        <option value="2">Food</option>
                        <option value="3">Fuel</option>
                        <option value="4">Shopping</option>
                        <option value="5">Other</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-25">
                    <label>Description</label>
                </div>
                <div class="col-75">
                    <textarea placeholder="Write something.." style="height:200px" v-model="description"></textarea>
                </div>
            </div>
            <br>
            <div class="row">
                <input type="submit" value="Add Expense">
            </div>

        </form>
    </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Add-Expense",
  data() {
    return {
      expenseDate: "",
      amount: "",
      currency: "",
      description: "",
      category_id: "",
    };
  },
  methods: {
    async addExpense() {
      const { expenseDate, amount, currency, description, category_id } = this;
      const formData = {
          expenseDate : new Date(expenseDate),
          amount : amount,
          currency : currency,
          description : description,
          category_id : Number(category_id),
          createdBy : sessionStorage.getItem('user_id')
      }
      await axios.post('/add-expense', formData);
      window.alert('Expense added successfully !!');
      this.$router.push("/expenses");
    }
  }
};
</script>
<style>
* {
  box-sizing: border-box;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>