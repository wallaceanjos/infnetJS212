<template>
  <ul>
    <li>
      <router-link to="/">home</router-link>
    </li>
    <li>
      <router-link to="/lista">lista</router-link>
    </li>
  </ul>

  <router-view></router-view>

</template>

<script>

export default {
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
}
li {
  margin-top: 10px;
}
</style>
