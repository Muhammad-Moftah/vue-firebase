<template>
  <nav class="nav-extended cyan darken-4 mb-3">
    <div class="container">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">Logo</router-link>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>

          <li>
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <router-link class="btn btn-floating btn-large halfway-fab pink waves-effect waves-light" to="/about"> <i class=" material-icons">add</i>
        </router-link>

      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",
    data() {
      return {};
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