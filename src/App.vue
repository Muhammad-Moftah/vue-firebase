<template>
  <div id="app">
    <Navbar />
    <h1>{{ title }}</h1>
    <button class="btn btn-danger" @click="changeTitle">Change</button>
  </div>
</template>

<script>
import Navbar from "./Navbar";
export default {
  name: "app",
  data() {
    return {
      title: "Vue app with firebase"
    };
  },
  components: {
    Navbar
  },
  methods: {
    changeTitle() {
      this.title = "Done Sir";
    }
  },

  updated(){
    alert(this.title);
  }
};
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
h6 {
  text-transform: capitalize;
}
</style>
