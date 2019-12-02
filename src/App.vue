<template>
  <div id="app">
    <Navbar />
    <h1>{{ title }}</h1>
  

    <div class="d-inline-block m-2 border" v-for="post in posts" :key="post.index">
      <h3>{{ post.favoriteFruit }}</h3>
      <p>{{ post.company }}</p>
    </div>

    <input type="text">
    <input type="button" value="Here it is">
    <input type="checkbox"> test 
  </div>
</template>

<script>
  import axios from "axios";
  import Navbar from "./Navbar";
  
  export default {
    name: "app",
    data() {
      return {
        title: "Vue app with firebase",
        posts: []
      };
    },
    components: {
      Navbar
    },
    methods: {},
    created() {
      axios
        .get("http://www.json-generator.com/api/json/get/ceRevxmPyq?indent=2")
        .then(jsonTest => {
          window.console.log(jsonTest.data);
          this.posts = jsonTest.data;
        });
    }
  }; // export defult end
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  a,
  .btn,
  button {
    text-decoration: none;
    outline: none;
    transition: all 300ms linear 0s;
  }

  a:hover,
  a:focus,
  .btn:hover,
  .btn:focus,
  button:hover,
  button:focus {
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }

  a,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input:not([type=text]) {
    text-transform: capitalize;
  }


</style>