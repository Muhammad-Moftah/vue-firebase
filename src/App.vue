<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.scroll {
  border: 1px solid #2c3e50;
  border-radius: 5px;
  display: block;
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  background-color: grey;
}

/* ==== Style Scrollbar ==== */
::-webkit-scrollbar {
  width: 11px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: 10px;
  background-color: #ececec;
}
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #8f8f8f;
}

/* ===== Styling Select ===== */
::-moz-selection {
  color: white;
  background-color: #26a69a;
}
::selection {
  color: white;
  background-color: #26a69a;
}
</style>
