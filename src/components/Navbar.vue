<template>
  <nav class="nav-extended cyan green darken-4 mb-5">
    <div class="container">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">Smooties</router-link>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>

          <li>
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <router-link class="add-button btn btn-floating btn-large halfway-fab waves-effect waves-light green darken-1 pulse" to="/addsmoothie">   <i class=" material-icons">add</i>
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

  .add-button.router-link-exact-active{
    background-color: #42b983 !important;
    overflow: hidden
  }
</style>