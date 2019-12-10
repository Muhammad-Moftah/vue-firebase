<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li>
          <router-link class="nav-link" to="/" exact>Home</router-link>
        </li>

        <li>
          <router-link class="nav-link" to="/about">About</router-link>
        </li> 
      </ul>
    </div>

  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return{}
    },
    components: {},
    methods: {}
  };
</script>

<style scoped>
  nav li {
    cursor: pointer;
  }

  nav li a.router-link-exact-active {
    color: #42b983 !important;
  }
</style>