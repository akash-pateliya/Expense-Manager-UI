<template>
  <div id="nav">
    <router-link to="/">Dashboard</router-link> |
    <router-link to="/expenses">Expenses</router-link> |
    <span v-if="isLoggedIn">
      <a>Logout</a>
    </span>
    <span v-else>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  computed : {
      isLoggedIn : function(){ return sessionStorage.getItem('token') !== null }
    },
    methods: {
      async logout (){
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('token');
        window.alert("Logout successfully !!");
        this.$router.push('/login')
      }
    },
}
</script>
<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
